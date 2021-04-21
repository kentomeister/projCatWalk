
// require('dotenv').config();
import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import axios from 'axios';


class RelatedProductCard extends React.Component {
  //const [product, setProduct] = useState([]);
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      relatedProductId: [],
      view: false
    };

    this.clickHandler = this.clickHandler.bind(this);

  }



  clickHandler(id) {
    this.props.changeView(true, id);
  }


  render() {

    return (
      <div>
        <ul id="autoWidth" className="cs-hidden">
          {this.props.products.map(product => {
            return <li className="item-d" onClick={() => this.clickHandler(product.id)}>

              <div className="card">
                <a href="#" className="action-btn">Add to outfit</a>
                <div className="slide-img">
                  <img alt="" src={product.styles[0].photos[0].thumbnail_url} />
                  <div className="overlay">
                  </div>
                </div>

                <div className="detail-box">

                  <div className="type">
                    <div className="detail">Category:  {product.category}</div>
                    <div className="detail">Name: {product.name}</div>
                    <div className="price detail"> Price: {product.default_price} </div>
                    <div className="detail">Review: </div>
                  </div>

                </div>

              </div>
            </li>
          })}

        </ul>

      </div>


    )
  }


}



export default RelatedProductCard;