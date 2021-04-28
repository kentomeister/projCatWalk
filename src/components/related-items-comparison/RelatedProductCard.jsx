import React from 'react';
import axios from 'axios';
import Outfit from './Outfit.jsx';
import ReactModal from 'react-modal';
import StarRating from '../shared/StarRating.jsx';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaStar, FaWindowClose, FaPlusCircle} from 'react-icons/fa';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      current: 0,
      outfit: [],
      showModal: false,
      products: [],
      add: false
    };

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.handleModalView = this.handleModalView.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenDetailView = this.handleOpenDetailView.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }


  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleModalView() {
    this.setState({
      showModal: true
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
    this.state.outfit.push(this.state.products[i][i]);
    this.setState({
      index: i + 1
    });
  }
  }

  componentDidMount () {
    this.setState({
      products: this.props.products
    });
  }

  render() {

    if (this.state.products.length === 0) {
      return null;
    }

    return (
      <div className="related-product">
        {this.state.current > 0 && (<FaArrowAltCircleLeft className="left-arrow" onClick={this.prev} />)}
        {this.state.products.length - 1 !== this.state.current && (
          <FaArrowAltCircleRight className="right-arrow" onClick={this.next} />
        )}

        {this.state.products.map((product, index) => {

          return (
            <div className={index === this.state.current ? 'slide active' : 'slide'}
              key={index}>
              <div className="box">
                {index === this.state.current && (

                  product.map((item, index) => {
                    return (
                      <div key={index}>

                        <div className="btn">
                          <button onClick={() => this.handleOpenModal()} className="star-btn"><FaStar /></button>
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
          changeView = {this.props.changeView}
          getProduct = {this.getProduct}
          />
            : <div>
              <h2 className="outfit">Your Outfit</h2>

              <div className="add-card q-a-div" onClick={()=> this.getProduct()}>  <FaPlusCircle className="fa-btn-circle" /> Add to Outfit</div>
            </div>
          }

        </div>

        <ReactModal isOpen={this.state.showModal}

          style={{
            overlay: {
              position: 'fixed',
              top: 200,
              left: 300,
              right: 300,
              bottom: 300,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '0px',
              left: '0px',
              right: '0px',
              bottom: '0px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'

            }
          }}
        >
          <FaWindowClose onClick={this.handleCloseModal} className="fa-btn" />
          <h2>Comparing</h2>
          <table>
            <thead>
              <tr>
                <th>{this.state.products[1][3].name}</th>
                <th>Sale Price</th>
                <th>{this.state.products[0][3].name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${this.state.products[1][3].default_price}</td>
                <td></td>
                <td>${this.state.products[0][3].default_price}</td>
              </tr>
              <tr>
                <td> <StarRating
                  rating={this.state.products[1][3].avgRating.toString()}
                  isClickable={false}
                  handleRatingClick={() => { }}
                  size="15"
                />
                </td>
                <td></td>
                <td> <StarRating
                  rating={this.state.products[0][2].avgRating.toString()}
                  isClickable={false}
                  handleRatingClick={() => { }}
                  size="15"
                />
                </td>
              </tr>
            </tbody>
          </table>

        </ReactModal>


      </div>

    )
  }


}



export default RelatedProductCard;

