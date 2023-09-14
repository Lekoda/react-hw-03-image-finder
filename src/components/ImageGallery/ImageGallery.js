import { ImageItem } from 'components/ImageItem/ImageItem';

export const ImageGallery = ({ images, ...restProps }) => {
  return (
    <ul>
      {images.map(image => {
        return (
          <li key={image.id}>
            <ImageItem image={image} {...restProps} />
          </li>
        );
      })}
    </ul>
  );
};
