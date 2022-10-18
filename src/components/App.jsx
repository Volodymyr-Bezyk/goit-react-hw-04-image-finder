import React, { Component } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader/Loader';
import LoadMore from './Button/Button';
import { Wrapper } from './App.styled';
import { fetchImages } from './apiService';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    loader: false,
    images: [],
    error: null,
  };
  async componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery } = this.state;
    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      try {
        this.setState({ loader: true });
        const pictures = await fetchImages(searchQuery, page);
        this.setState(({ images }) => ({ images: [...images, ...pictures] }));
      } catch (error) {
        this.setState({ error: 'Something went wrogn...' });
      } finally {
        this.setState({ loader: false });
      }
    }
  }

  onSubmitHandler = (query, actions) => {
    this.setState({ ...query, page: 1, images: [] });
    actions.resetForm();
  };

  onLoadMoreClick = () => this.setState(({ page }) => ({ page: page + 1 }));

  render() {
    const { images, loader } = this.state;
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

        <ImageGallery images={pictures}></ImageGallery>
        {loader && <Loader></Loader>}
        {images.length > 0 && (
          <LoadMore onClick={this.onLoadMoreClick} disabled={loader}></LoadMore>
        )}
      </Wrapper>
    );
  }
}

export default App;
