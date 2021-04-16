import React, { useState } from 'react';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';

const StarRating = ({ rating, size, handleRatingClick }) => {
  const [whole, part] = rating.split('.');
  let starArr = [...Array(5)];
  starArr = starArr.map((p, i) => {
    if (i < whole) {
      return 1;
    }
    if (i == whole && part <= 5) {
      return 0.5;
    }
    return 0;
  });

  const [hover, setHover] = useState(null);

  return (
    <div className="rating-container">
      {starArr.map((star, i) => {
        const ratingValue = i + 1;
        if (star === 1) {
          return (
            <IoIosStar
              size={hover === ratingValue ? size * 1.5 : size}
              key={ratingValue}
              data-rating={ratingValue}
              onClick={() => { handleRatingClick(ratingValue); }}
              onMouseOver={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className="star"
            />
          );
        }
        if (star === 0.5) {
          return (
            <IoIosStarHalf
              size={hover === ratingValue ? size * 1.5 : size}
              key={ratingValue}
              className="star"
              onClick={() => { handleRatingClick(ratingValue); }}
              onMouseOver={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          );
        }
        return (
          <IoIosStarOutline
            size={hover === ratingValue ? size * 1.5 : size}
            key={ratingValue}
            className="star dark"
            onClick={() => { handleRatingClick(ratingValue); }}
            onMouseOver={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
