import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import StarRating from '../shared/StarRating.jsx';

const Outfit = ({ product, getProduct }) => {

  let products = [];
  products = products.concat(product);

  const removeItem = (id) => {
    products.map((item, index) => {
      if (id === item.id) {
        products.splice(index, 1);
        getProduct(products);
      }

    });

  };


    return (
      <div>

        <h2 className="outfit">Your Outfit</h2>

        <div className="box">

          {products.slice(0, 4).map((product) => {

            return (
              <div>
                <button onClick={() => removeItem(product.id)} className="delete-btn">X</button>
                <div className="card q-a-div" >

                  <img alt="" src={product.styles[0].photos[0].thumbnail_url} />

                  <div className="detail-box">
                    <div className="type">
                      <div className="detail">Category:  {product.category}</div>
                      <div className="detail">Name: {product.name}</div>
                      <div className="price detail"> Price: {product.default_price} </div>
                      <div className="detail">Review:
                    <StarRating
                          rating={product.avgRating.toString()}
                          isClickable={false}
                          handleRatingClick={() => { }}
                          size="15"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )

          })}
        </div>
      </div>

    )


}


export default Outfit;