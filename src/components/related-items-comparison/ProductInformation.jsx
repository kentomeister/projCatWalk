import React from 'react';

const ProductInformation = ({product}) => {

  return (

    <div className="product_info">
      <h2>{product.slogan}!</h2>
      <div>Description:
        <p>{product.description}</p></div>
      <div>Category: {product.category}</div>
      <div>Name: {product.name}</div>
      <div>Price: {product.default_price}</div>
      <div>Star Rating</div>
      <img src= {product.styles[0].photos[0].url}  alt=""/>
    </div>

  )
}



export default ProductInformation;