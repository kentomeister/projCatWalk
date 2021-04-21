/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ImageGalleryThumbnails from './ImageGalleryThumbnails.jsx';

const ImageGallery = ({ images }) => {
  if (images === undefined) return '';
  const [imageIndex, setImageIndex] = useState(0);
  const [currentImageUrl, setCurrentImageUrl] = useState(images[0].url);
  useEffect(() => { setCurrentImageUrl(images[0].url); }, [images]);

  const handleImageThumbnailclick = (imageUrl) => setCurrentImageUrl(imageUrl);
  const handleLeftArrowClick = () => console.log('left click');
  const handleRightArrowClick = () => console.log('Right Click');
  return (

    <div
      className="image-gallery"
      style={{ backgroundImage: `url(${currentImageUrl})` }}
    >
      <AiOutlineArrowLeft
        color="white"
        size="40"
        className="image-gallery-left-arrow"
        cursor="pointer"
        onClick={handleLeftArrowClick}
      />
      <ImageGalleryThumbnails
        images={images}
        currentImage={currentImageUrl}
        handleImageThumbnailclick={handleImageThumbnailclick}
      />
      <AiOutlineArrowRight
        color="white"
        size="40"
        className="image-gallery-right-arrow"
        cursor="pointer"
        onClick={handleRightArrowClick}
      />
    </div>
  );
};

export default ImageGallery;
