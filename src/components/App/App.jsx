import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Loader from '../Loader/Loader';
import LoadMore from '../Button/Button';
import Notification from '../Notice/Notice';
import { Wrapper } from './App.styled';
import { fetchImages } from '../apiService';
import GallerySkeleton from 'components/gallerySkeleton';
import stateStatus from 'components/StateStatus';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(stateStatus.IDLE);

  useEffect(() => {
    async function fetchData() {
      if (query.length === 0) return;

      try {
        setStatus(stateStatus.PENDING);
        const result = await fetchImages(query, page);

        if (result.length === 0) {
          setStatus(stateStatus.IDLE);
          toast.error(
            `It looks like we couldn't find anything for your query ${query}`
          );
          return;
        }

        setImages(prevImages => [...prevImages, ...result]);
        if (page === 1) {
          toast.success(`Awesome! We found images`);
        }
        setStatus(stateStatus.RESOLVED);
      } catch {
        setStatus(stateStatus.REJECTED);
        setError('Something went wrong... Please try again');
      }
    }

    fetchData();
  }, [query, page]);

  const onSubmitHandler = (query, actions) => {
    setQuery(query.searchQuery);
    setImages([]);

    actions.resetForm();
  };
  const onLoadMoreClick = () => setPage(prevPage => prevPage + 1);

  return (
    <Wrapper>
      <Toaster position="top-right" reverseOrder={false} />
      <Searchbar onSubmit={onSubmitHandler}></Searchbar>
      {status === stateStatus.REJECTED && <p>{error}</p>}
      {status === stateStatus.IDLE && <Notification></Notification>}
      <ImageGallery images={images}></ImageGallery>
      {status === stateStatus.PENDING && <Loader></Loader>}
      {status === stateStatus.PENDING && <GallerySkeleton></GallerySkeleton>}
      {status === stateStatus.RESOLVED && (
        <LoadMore
          onClick={onLoadMoreClick}
          disabled={status === stateStatus.PENDING}
        ></LoadMore>
      )}
    </Wrapper>
  );
};

export default App;
