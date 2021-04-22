import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const Outfit = ({ product }) => {
  let products = [];
  products = products.concat(product);

  const [current, setCurrent] = useState(0);

  const removeItem = (id) => {
    console.log(id, "ID");
    products.forEach((item, index) => {
      if (id === item.id) {
        products.splice(index, 1);
      }
    });

  };

  if (products.length > 0) {

    return (
      <div>

        <h2 className="outfit">Your Outfit</h2>

        <div className="box">

          {products.slice(0, 4).map((product) => {

            return (
              <div>
             <button onClick = {() => removeItem(product.id)}className="action-btn">X</button>
              <div className="card" >

                <img alt="" src={product.styles[0].photos[0].thumbnail_url} />

                <div className="detail-box">
                  <div className="type">
                    <div className="detail">Category:  {product.category}</div>
                    <div className="detail">Name: {product.name}</div>
                    <div className="price detail"> Price: {product.default_price} </div>
                    <div className="detail">Review: </div>
                  </div>
                </div>

              </div>
              </div>
            )

          })}
        </div>
      </div>

    )
  } else {
    return <h2 className="outfit">Your Outfit</h2>
  }


}


export default Outfit;