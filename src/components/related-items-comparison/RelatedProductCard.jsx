
// require('dotenv').config();
import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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

  getData() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19090/related', {headers: {Authorization: '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'}})
    .then(res => {
      console.log(res.data);
      this.setState({
        relatedProductId: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  clickHandler(option) {
  this.setState({
    view: true
  });
this.props.changeView(true);
    }


    componentDidMount() {
      this.getData();
    }


  render() {
    console.log(typeof this.props.changeView);
    return (
      <div>
        <ul id="autoWidth" className="cs-hidden">


          <li className="item-d" onClick={this.clickHandler}>

            <div className="card">
              <a href="#" className="action-btn">Add to outfit</a>
              <div className="slide-img">
                <img alt="" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" />
                <div className="overlay">
                </div>
              </div>

              <div className="detail-box">

                <div className="type">
                  <div className="detail">Category:  Jackets</div>
                  <div className="detail">Name: Camo Onesie</div>
                  <div className="price detail"> Price: $140.00 </div>
                  <div className="detail">Review: </div>
                </div>

              </div>

            </div>
          </li>

          <li className="item-d" onClick={this.clickHandler}>

            <div className="card">
              <a href="#" className="action-btn">Add to outfit</a>
              <div className="slide-img">
                <img alt="" src="" />
                <div className="overlay">
                </div>
              </div>

              <div className="detail-box">

                <div className="type">
                  <div className="detail">Category: </div>
                  <div className="detail">Name: </div>
                  <div className="price detail"> Price </div>
                  <div className="detail">Review: </div>
                </div>

              </div>

            </div>
          </li>


          <li className="item-d" onClick={this.clickHandler}>

            <div className="card">
              <a href="#" className="action-btn">Add to outfit</a>
              <div className="slide-img">
                <img alt="" src="https://picsum.photos/150/200" />
                <div className="overlay">
                </div>
              </div>

              <div className="detail-box">

                <div className="type">
                  <div className="detail">Category: </div>
                  <div className="detail">Name: </div>
                  <div className="price detail"> Price </div>
                  <div className="detail">Review: </div>
                </div>

              </div>

            </div>
          </li>

        </ul>

      </div>


    )
  }


}



export default RelatedProductCard;