/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosExpand } from 'react-icons/io';
import ImageGalleryThumbnails from './ImageGalleryThumbnails.jsx';

const ImageGallery = ({ images, handleImageContainerExpandClick }) => {
  if (images === undefined) return '';
  const [imageIndex, setImageIndex] = useState(0);
  const [currentImageUrl, setCurrentImageUrl] = useState(images[imageIndex].url);
  useEffect(() => { setCurrentImageUrl(images[0].url); }, [images]);
  useEffect(() => { setCurrentImageUrl(images[imageIndex].url); }, [imageIndex]);

  const handleImageThumbnailclick = (imageUrl) => setCurrentImageUrl(imageUrl);
  const handleLeftArrowClick = () => setImageIndex((prevIndex) => prevIndex - 1);
  const handleRightArrowClick = () => setImageIndex((prevIndex) => prevIndex + 1);
  const showLeftArrow = imageIndex > 0;
  const showRightArrow = imageIndex < images.length - 1;

  return (

    <div
      className="image-gallery"
      style={{ backgroundImage: `url(${currentImageUrl})` }}
    >
      <IoIosExpand
        size="35"
        color="white"
        cursor="pointer"
        className="image-gallery-expand"
        onClick={handleImageContainerExpandClick}
      />
      {
        showLeftArrow
          ? (
            <AiOutlineArrowLeft
              color="white"
              size="40"
              className="image-gallery-left-arrow"
              cursor="pointer"
              onClick={handleLeftArrowClick}
            />
          ) : null
      }
      <ImageGalleryThumbnails
        images={images}
        currentImage={currentImageUrl}
        handleImageThumbnailclick={handleImageThumbnailclick}
      />
      {
        showRightArrow
          ? (
            <AiOutlineArrowRight
              color="white"
              size="40"
              className="image-gallery-right-arrow"
              cursor="pointer"
              onClick={handleRightArrowClick}
            />
          ) : null
      }
    </div>
  );
};

export default ImageGallery;
