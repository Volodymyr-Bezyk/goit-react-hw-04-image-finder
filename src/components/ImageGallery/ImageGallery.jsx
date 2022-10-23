import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const Gallery = ({ images }) => (
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

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string,
      webformatURL: PropTypes.string,
    })
  ).isRequired,
};

export default Gallery;
