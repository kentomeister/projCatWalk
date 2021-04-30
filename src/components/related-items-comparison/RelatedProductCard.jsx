import React from 'react';
import axios from 'axios';
import Outfit from './Outfit.jsx';
import Modal from './Modal.jsx';
import StarRating from '../shared/StarRating.jsx';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { FaStar, FaWindowClose, FaPlusCircle } from 'react-icons/fa';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      current: 0,
      outfit: [],
      show: false,
      products: [],
      add: false
    };

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenDetailView = this.handleOpenDetailView.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }


  handleOpenModal() {
    this.setState({
      show: true
    });

  }

  handleCloseModal() {
    this.setState({
      show: false
    });
  }

  handleOpenDetailView(id) {

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

  getProduct(product) {
    if (product) {
      this.state.outfit.push(product);
      this.setState({
        add: true
      });
    } else {
      let i = this.state.index;
      this.state.outfit.push(this.props.products[i][i]);
      this.setState({
        index: i + 1
      });
    }
  }


  render() {

    return (
      <div className="related-product">


          {this.state.current > 0 && (
            <AiOutlineDoubleLeft
              color="black"
              size="40"
              position="absolute"
              className="left-arrow"
              onClick={this.prev}
            />

          )}


{this.props.products.length - 1 !== this.state.current && (

              <AiOutlineDoubleRight
              className="right-arrow"
                color="black"
                size="40"
               position="absolute"
                onClick={this.next}
              />
            )}


          {this.props.products.map((product, index) => {

            return (
              <div className={index === this.state.current ? 'slide active' : 'slide'}
                key={index}>

                <div className="box">
                  {index === this.state.current && (

                    product.map((item, index) => {
                      return (
                        <div key={index}>

                          <div className="btn">
                            <button onClick={this.handleOpenModal} className="star-btn"><FaStar /></button>
                            <button onClick={() => this.getProduct(item)} className="action-btn">Add to outfit</button>
                          </div>


                          <div className="card q-a-div" onClick={() => { this.handleOpenDetailView(item.id) }}>

                            <img alt="Sorry! Image not available at this time" src={item.styles[0].photos[0].thumbnail_url} />

                            <div className="detail-box">

                              <div className="detail">Category:  {item.category}</div>
                              <div className="detail">Name: {item.name}</div>
                              <div className="price detail"> Price: {item.default_price} </div>
                              <div className="detail">Review:
                            <StarRating
                                  rating={item.avgRating.toString()}
                                  isClickable={false}
                                  handleRatingClick={() => { }}
                                  size="15"
                                />
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


        <hr />
        <div className="outfit-section">
          {this.state.outfit.length > 0 ? <Outfit product={this.state.outfit}
            changeView={this.props.changeView}
            getProduct={this.getProduct}
          />
            : <>
              <h2 className="outfit">Your Outfit</h2>

              <div className="add-card q-a-div" onClick={() => this.getProduct()}>
              <FaPlusCircle className="fa-btn-circle" />
               Add to Outfit</div>
             </>
          }

        </div>
        {this.state.show ?
          <Modal products={this.props.products}
            handleClose={this.handleCloseModal}
          />
          : null
        }

      </div>

    )
  }

}



export default RelatedProductCard;

