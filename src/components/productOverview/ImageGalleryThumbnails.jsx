/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

import ImageThumbnail from './ImageThumbnail.jsx';

const ImageGalleryThumbnails = ({ images, currentImage, handleImageThumbnailclick }) => {
  const [startPointer, setStartPointer] = useState(0);
  const imagesToDisplay = images.slice(startPointer, startPointer + 4);
  const handleArrowDownClick = (e) => {
    e.stopPropagation();
    if (startPointer < images.length - 4) {
      setStartPointer((prevStartPointer) => prevStartPointer + 1);
    }
  };
  const handleArrowUpClick = (e) => {
    e.stopPropagation();
    if (startPointer > 0) {
      setStartPointer((prevStartPointer) => prevStartPointer - 1);
    }
  };

  const showUpArrow = startPointer > 0;
  const showDownArrow = startPointer < images.length - 4;
  return (
    <div className="image-gallery-thumbnail-container">
      <div className="image-gallery-arrow-icon">
        {
          showUpArrow
          && (
            <AiOutlineArrowUp
              size="75"
              color="white"
              cursor="pointer"
              onClick={handleArrowUpClick}
            />
          )
        }
      </div>
      {imagesToDisplay.map((image) => (
        <ImageThumbnail
          imageUrl={image.url}
          selected={currentImage === image.url}
          key={image.url}
          handleImageThumbnailclick={handleImageThumbnailclick}
        />
      ))}
      <div className="image-gallery-arrow-icon">
        {
          showDownArrow
          && (
            <AiOutlineArrowDown
              size="75"
              color="white"
              cursor="pointer"
              onClick={handleArrowDownClick}
            />
          )
        }
      </div>
    </div>
  );
};

export default ImageGalleryThumbnails;
