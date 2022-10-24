import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';
import { useState } from 'react';

const ImageGalleryItem = ({ tags, largeImageURL, webformatURL }) => {
  const [modalSrc, setModalSrc] = useState('');

  return (
    <GalleryItem>
      <GalleryImg
        src={webformatURL}
        alt={tags}
        onClick={() => setModalSrc(largeImageURL)}
      />

      {modalSrc && (
        <Modal
          src={largeImageURL}
          alt={tags}
          onClose={() => setModalSrc('')}
        ></Modal>
      )}
    </GalleryItem>
  );
};

export default ImageGalleryItem;
