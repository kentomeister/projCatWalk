import React from 'react';

const ProductInformation = ({product}) => {
  console.log(typeof changeView, 'Hi! You clicked me!!!!');

  return (
    <div className="product_info">
      <h2>Blend in to your crowd!</h2>
      <div>Description:
        <p>The So Fatigues will wake you up and fit you in.
        This high energy camo will have you blending in to even the wildest
        surroundings.</p></div>
      <div>Category: Jackets</div>
      <div>Name: Camo Onesie</div>
      <div>Price: $140.00</div>
      <div>Star Rating</div>
      <img src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt=""/>
    </div>
  )
}



export default ProductInformation;