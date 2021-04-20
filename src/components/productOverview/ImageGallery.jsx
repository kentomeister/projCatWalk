import React from 'react';

const ImageGallery = (props) => {
  const { images } = props;
  if (images === undefined) return '';

  return (

    <div
      className="image-gallery"
      style={{ backgroundImage: `url(${images[0].url})` }}
    >
      image Gallery
    </div>
  );
};

export default ImageGallery;
