import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import StarRating from '../shared/StarRating.jsx';

const ProductInformation = ({ product, changeView }) => (

  <div className="product_info">
    <FaWindowClose onClick={() => changeView(false, product.id)} className="fa-btn" />
    <h2>{product.slogan}!</h2>
    <div className="info">
    <div className="info">Description:
        {product.description}</div>
      <div className="info">Category: {product.category}</div>
      <div className="info">Name: {product.name}</div>
      <div className="info">Price: {product.default_price}</div>
      <div>Review:
      <StarRating
          rating={product.avgRating.toString()}
          isClickable={false}
          handleRatingClick={() => { }}
          size="15"
        />
      </div>
    </div>
    <img src={product.styles[0].photos[0].url} alt="" />
  </div>

)




export default ProductInformation;