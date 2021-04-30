import React from 'react';

const ProductDetails = ({ slogan, description }) => {
  if (slogan && description) {
    return (
      <div className="product-details">
        <div>
          {slogan && slogan}
        </div>
        <div>
          {description && description}
        </div>
      </div>
    );
  } else {
    return (
      <div className="product-details">
        <div>
          {slogan && slogan}
        </div>
      </div>
    );
  }
};

export default ProductDetails;
