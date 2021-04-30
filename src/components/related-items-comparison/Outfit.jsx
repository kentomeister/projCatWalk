import React, { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import StarRating from '../shared/StarRating.jsx';


class Outfit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      render: false
    };

    this.removeItem = this.removeItem.bind(this);

  }

  componentDidMount() {
    this.setState({
      products: this.props.product,
      render: true
    });
  }


  removeItem(id) {
    let p = this.state.products;
    p.map((item, index) => {
      if (id === item.id) {
        p.splice(index, 1);
        this.setState({
          products: p
        });
      }

    });

  }


  render() {

    if (this.render) {
      return (
        <div>

          <h2 className="outfit">Your Outfit</h2>

          <div className="box">
            <div className="add-card q-a-div" onClick = {() => this.props.getProduct()}>
             <FaPlusCircle className="fa-btn-circle" /> Add to Outfit </div>

            {this.state.products.slice(0, 4).map((product, index) => {

              return (
                <div key={index}>
                  <button onClick={() => this.removeItem(product.id)} className="delete-btn">X</button>
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
    } else {
      return null;
    }


  }

}


export default Outfit;