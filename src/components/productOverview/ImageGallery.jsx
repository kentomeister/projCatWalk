/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosExpand } from 'react-icons/io';
import ImageGalleryThumbnails from './ImageGalleryThumbnails.jsx';
import ImagePortal from './ImagePortal.jsx';

const ImageGallery = ({
  images,
  handleImageContainerExpandClick,
  setPinterestImageUrl
}) => {
  if (images === undefined) return '';
  const [imageIndex, setImageIndex] = useState(0);
  const [currentImageUrl, setCurrentImageUrl] = useState(images[imageIndex].url);
  const [isImagePortalOpen, setIsImagePortalOpen] = useState(false);
  useEffect(() => {
    setCurrentImageUrl(images[0].url);
    setPinterestImageUrl(images[0].url);
  }, [images]);

  useEffect(() => {
    setCurrentImageUrl(images[imageIndex].url);
    setPinterestImageUrl(images[imageIndex].url);
  }, [imageIndex]);

  const handleImageThumbnailclick = (imageUrl) => setCurrentImageUrl(imageUrl);
  const handleLeftArrowClick = (e) => {
    e.stopPropagation();
    setImageIndex((prevIndex) => prevIndex - 1);
  };
  const handleRightArrowClick = (e) => {
    e.stopPropagation();
    setImageIndex((prevIndex) => prevIndex + 1);
  };
  const showLeftArrow = imageIndex > 0;
  const showRightArrow = imageIndex < images.length - 1;

  return (
    <>
      <div
        className="image-gallery"
        style={{ backgroundImage: `url(${currentImageUrl})`, cursor: 'zoom-in' }}
        onClick={() => setIsImagePortalOpen(true)}
      // onKeyPress={(e)=> console.log(e)}
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
      <ImagePortal
        open={isImagePortalOpen}
        onClose={() => setIsImagePortalOpen(false)}
      >
        <img src={currentImageUrl} alt="Enlarged Main Product" />
      </ImagePortal>
    </>
  );
};

export default ImageGallery;
