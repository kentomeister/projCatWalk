import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const Outfit = ({ product }) => {

  const [remove, setRemove] = useState(false);
  let products = [];
  products = products.concat(product);

  const removeItem = (id) => {
    products.map((item, index) => {
      if (id === item.id) {
        products.splice(index, 1);
        setRemove(true);
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