import React from 'react';
import StarRating from '../shared/StarRating.jsx';



const ProductInformation = ({ productData }) => {
  const { name, category } = productData;
  return (
    <div className="product-information">
      <StarRating
        rating="2.5"
        isClickable={false}
        handleRatingClick={() => {}}
      />
      <button type="button">Read the # Reviews</button>
      <h3>{name}</h3>
      <h4>{category}</h4>
      <h4>Price will go here... </h4>
    </div>
  );
};

export default ProductInformation;
