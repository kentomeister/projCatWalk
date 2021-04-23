import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';

/**
 *
 * @param {string} rating number 0.0 - 5.0 representing number of stars to be yellow. 0.5 resolution
 *
 * @param {string} size how large the icons should be. Default: 20
 *
 * @param {bool} isClickable enable/disable user clicking, Default: true
 *
 * @param {func} handleRatingClick handle the user clicking on a star.
 * Passes a string with the rating of the clicked star to function
 *
 * @returns {StarRating} 5 stars displayed on the screen which can be clicked on.
 */

const StarRating = ({
  rating, size, isClickable, handleRatingClick,
}) => {
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
    <span className="rating-container">
      {starArr.map((star, i) => {
        const ratingValue = i + 1;
        if (star === 1) {
          return (
            <IoIosStar
              size={hover === ratingValue ? size * 1.2 : size}
              key={ratingValue}
              data-rating={ratingValue}
              onClick={() => isClickable && handleRatingClick(ratingValue.toString())}
              onMouseOver={() => isClickable && setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className="star"
            />
          );
        }
        if (star === 0.5) {
          return (
            <IoIosStarHalf
              size={hover === ratingValue ? size * 1.2 : size}
              key={ratingValue}
              className="star"
              onClick={() => isClickable && handleRatingClick(ratingValue.toString())}
              onMouseOver={() => isClickable && setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          );
        }
        return (
          <IoIosStarOutline
            size={hover === ratingValue ? size * 1.2 : size}
            key={ratingValue}
            className="star dark"
            onClick={() => isClickable && handleRatingClick(ratingValue.toString())}
            onMouseOver={() => isClickable && setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          />
        );
      })}
    </span>
  );
};

StarRating.propTypes = {
  rating: PropTypes.string.isRequired,
  size: PropTypes.string,
  isClickable: PropTypes.bool,
  handleRatingClick: PropTypes.func.isRequired,

};

StarRating.defaultProps = {
  size: '20',
  isClickable: true,
};

export default StarRating;
