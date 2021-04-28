/* eslint-disable import/extensions */
import React from 'react';
import StarRating from '../shared/StarRating.jsx';

const priceDisplay = (price, salePrice, defaultPrice) => {
  if (salePrice) {
    return (
      <>
        <span className="strike-through">
          $
          {price}
        </span>
        {' '}
        <span className="sale-price">
          $
          {salePrice}
        </span>
      </>
    );
  }
  return (
    <span>
      $
      {price || defaultPrice}
    </span>
  );
};

const ProductInformation = ({ productData, price, salePrice }) => {
  const {
    name,
    category,
    avgRating,
    default_price,
    numReviews
  } = productData;
  return (
    <div className="product-information">
      <span>
        <StarRating
          rating={avgRating}
          isClickable={false}
          handleRatingClick={() => { }}
          size="15"
        />
      </span>
      {' '}
      <span className="link">
        <a href="#reviews">
          Read the
          {' '}
          {numReviews}
          {' '}
          Reviews
        </a>
      </span>
      <h3>
        {name}
      </h3>
      <h5>
        <span className="bold">Category: </span>
        {' '}
        {category}
      </h5>
      <h4>
        {priceDisplay(price, salePrice, default_price)}
      </h4>
    </div>
  );
};

export default ProductInformation;
