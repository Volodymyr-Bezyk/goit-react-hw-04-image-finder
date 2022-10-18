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

export default Gallery;
