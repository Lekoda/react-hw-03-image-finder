export const ImageItem = ({ image }) => {
  return <img src={image.webformatURL} alt={image.tags} />;
};
