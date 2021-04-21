/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/Ai';
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
  return (
    <div className="image-gallery-thumbnail-container">
      <AiOutlineArrowUp
        size="75"
        color="white"
        cursor="pointer"
        onClick={handleArrowUpClick}
      />
      {imagesToDisplay.map((image) => (
        <ImageThumbnail
          imageUrl={image.url}
          selected={currentImage === image.url}
          key={image.url}
          handleImageThumbnailclick={handleImageThumbnailclick}
        />
      ))}
      <AiOutlineArrowDown
        size="75"
        color="white"
        cursor="pointer"
        onClick={handleArrowDownClick}
      />
    </div>
  );
};

export default ImageGalleryThumbnails;
