/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

import ImageThumbnail from './ImageThumbnail.jsx';

const ImageGalleryThumbnails = ({ images, currentImage, handleImageThumbnailclick }) => {
  const [startPointer, setStartPointer] = useState(0);
  const imagesToDisplay = images.slice(startPointer, startPointer + 4);
  const handleArrowDownClick = () => {
    if (startPointer < images.length - 4) {
      setStartPointer((prevStartPointer) => prevStartPointer + 1);
    }
  };
  const handleArrowUpClick = () => {
    if (startPointer > 0) {
      setStartPointer((prevStartPointer) => prevStartPointer - 1);
    }
  };

  const showUpArrow = startPointer > 0;
  const showDownArrow = startPointer < images.length - 4;
  return (
    <div className="image-gallery-thumbnail-container">

      {
        (showUpArrow
          && <AiOutlineArrowUp
            size="75"
            color="white"
            cursor="pointer"
            onClick={handleArrowUpClick}
          />)
      }
      {imagesToDisplay.map((image) => (
        <ImageThumbnail
          imageUrl={image.url}
          selected={currentImage === image.url}
          key={image.url}
          handleImageThumbnailclick={handleImageThumbnailclick}
        />
      ))}
      {
        (showDownArrow
          && <AiOutlineArrowDown
            size="75"
            color="white"
            cursor="pointer"
            onClick={handleArrowDownClick}
          />)
      }
    </div>
  );
};

export default ImageGalleryThumbnails;
