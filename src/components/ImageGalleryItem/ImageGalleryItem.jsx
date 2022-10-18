import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    modal: '',
  };

  onImageClickHandler = url => () => {
    this.setState({ modal: url });
  };

  closeModal = () => {
    this.setState({ modal: '' });
  };

  render() {
    const { modal } = this.state;
    const { tags, largeImageURL, webformatURL } = this.props;

    return (
      <GalleryItem>
        <GalleryImg
          src={webformatURL}
          alt={tags}
          onClick={this.onImageClickHandler(largeImageURL)}
        />
        {modal && (
          <Modal
            src={largeImageURL}
            alt={tags}
            onClose={this.closeModal}
          ></Modal>
        )}
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
