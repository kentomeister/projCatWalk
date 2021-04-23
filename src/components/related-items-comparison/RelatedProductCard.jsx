import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import axios from 'axios';
import Outfit from './Outfit.jsx';
import ReactModal from 'react-modal';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaStar } from 'react-icons/fa';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductId: [],
      view: false,
      current: 0,
      outfit: [],
      showModal: false
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.handleModalView = this.handleModalView.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  clickHandler(id) {

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

    this.state.outfit.push(product);
    this.setState({
      view: true,
    });

  }

  render() {

    if(this.props.products.length === 0) {
      return null;
    }

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

                       <div className="btn">
                        <button onClick={() => this.handleOpenModal()} className="star-btn"><FaStar /></button>
                        <button onClick={() => this.getProduct(item)} className="action-btn">Add to outfit</button>
                       </div>


                        <div className="card" onClick={() => { this.clickHandler(item.id) }}>

                          <img alt="Sorry! Image not available at this time" src={item.styles[0].photos[0].thumbnail_url} />

                          <div className="detail-box">

                              <div className="detail">Category:  {item.category}</div>
                              <div className="detail">Name: {item.name}</div>
                              <div className="price detail"> Price: {item.default_price} </div>
                              <div className="detail">Review: </div>

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

        {this.state.outfit.length > 0 ? <Outfit product={this.state.outfit}

        /> :
          <Outfit product={[]} />}

        <ReactModal isOpen={this.state.showModal}

          style={{
            overlay: {
              position: 'fixed',
              top: 200,
              left: 200,
              right: 200,
              bottom: 200,
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

          <button onClick={this.handleCloseModal}>Close</button>
          <h2>Comparing</h2>
          <table>
            <thead>
              <tr>
                <th>{this.props.products[1][3].name}</th>
                <th></th>
                <th>{this.props.products[0][3].name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.products[1][3].price}</td>
                <td>Characteristic</td>
                <td>{this.props.products[0][3].price}</td>
              </tr>
            </tbody>
          </table>

        </ReactModal>


      </div>

    )
  }


}



export default RelatedProductCard;

