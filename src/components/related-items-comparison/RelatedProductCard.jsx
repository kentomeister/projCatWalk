import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import axios from 'axios';
import Outfit from './Outfit.jsx'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      relatedProductId: [],
      view: false,
      current: 0,
      outfit: []
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  clickHandler(id) {
    console.log(id);
    this.props.changeView(true, id);
  }

  next() {
    if (this.state.current === this.props.products.length - 1) {
      this.setState({
        current: 0
      });
    } else {
      this.setState({
        current: this.state.current + 1
      });
    }
  }

  prev() {
    if (this.state.current === 0) {
      this.setState({
        current: this.props.products.length - 1
      });
    } else {
      this.setState({
        current: this.state.current - 1
      });
    }
  }

  getProduct (product) {
    this.state.outfit.push(product);
    this.setState({
      view: true,
    });

    console.log(product);
  }

  render() {

    return (
      <div >
        <FaArrowAltCircleLeft className="left-arrow" onClick={this.prev} />
        <FaArrowAltCircleRight className="right-arrow" onClick={this.next} />

        {this.props.products.map((product, index) => {

          return (
            <div className={index === this.state.current ? 'slide active' : 'slide'}
              key={index}>
              <div className="box">
                {index === this.state.current && (

                  product.map(item => {
                    return (
                      <div>

                        <button onClick={() => this.getProduct(item)} className="action-btn">Add to outfit</button>
                      <div className="card" onClick={() => {this.clickHandler(item.id)}}>

                        <img alt="" src={item.styles[0].photos[0].thumbnail_url} />

                        <div className="detail-box">
                          <div className="type">
                            <div className="detail">Category:  {item.category}</div>
                            <div className="detail">Name: {item.name}</div>
                            <div className="price detail"> Price: {item.default_price} </div>
                            <div className="detail">Review: </div>
                          </div>
                        </div>

                      </div>
                      </div>
                    )

                  })

                )}

              </div>

            </div>

          )

        })}

        {this.state.view ?  <Outfit product = {this.state.outfit}/> :
        <Outfit product = {[]}/> }

      </div>

    )
  }


}



export default RelatedProductCard;

