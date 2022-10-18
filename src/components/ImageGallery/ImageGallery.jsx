import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const Gallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(({ id, tags, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          key={id * Date.now()}
          tags={tags}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
        ></ImageGalleryItem>
      ))}
    </GalleryList>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
