import React, { Component } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Loader from '../Loader/Loader';
import LoadMore from '../Button/Button';
import Notification from '../Notice/Notice';
import { Wrapper } from './App.styled';
import { fetchImages } from '../apiService';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    error: null,
    status: 'idle',
  };
  async componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery } = this.state;
    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      try {
        this.setState({ status: 'pending' });
        const pictures = await fetchImages(searchQuery, page);
        if (pictures.length === 0) {
          this.setState({ status: 'idle' });
        }
        if (pictures.length > 0) {
          this.setState(({ images }) => ({
            images: [...images, ...pictures],
            status: 'resolved',
          }));
        }
      } catch (error) {
        this.setState({ error: 'Something went wrogn...', status: 'rejected' });
      }
    }
  }

  onSubmitHandler = (query, actions) => {
    this.setState({ ...query, page: 1, images: [] });
    actions.resetForm();
  };

  onLoadMoreClick = () => this.setState(({ page }) => ({ page: page + 1 }));

  render() {
    const { images, error, status } = this.state;
    const pictures = images.map(
      ({ id, tags, largeImageURL, webformatURL }) => ({
        id,
        webformatURL,
        largeImageURL,
        tags,
      })
    );

    return (
      <Wrapper>
        <Searchbar onSubmit={this.onSubmitHandler}></Searchbar>
        {status === 'rejected' && <p>{error}</p>}
        {status === 'idle' && <Notification></Notification>}
        <ImageGallery images={pictures}></ImageGallery>
        {status === 'pending' && <Loader></Loader>}
        {status === 'resolved' && (
          <LoadMore
            onClick={this.onLoadMoreClick}
            disabled={status === 'pending'}
          ></LoadMore>
        )}
      </Wrapper>
    );
  }
}

export default App;
