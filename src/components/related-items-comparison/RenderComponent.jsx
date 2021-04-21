import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import ProductInformation from './ProductInformation.jsx';
import axios from 'axios';
const data = require('./exampleData.jsx');

class RenderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showFullInformation: false,
      relatedProducts: [],
      relatedProductIds: [],
      productInformation: []
    };

    this.changeView = this.changeView.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData() {
    let arrayOfProducts = [];
    axios.get('/products/19090')
      .then(res => {
        this.setState({
          relatedProductId: res.data
        });
      }).then(() => {
        const productIds = this.state.relatedProductId;
        productIds.map(productId => {
          axios.get(`/productOverview/${productId}`)
            .then(resData => {
              arrayOfProducts = arrayOfProducts.concat(resData.data);
              // console.log(arrayOfProducts);
            });
        });
      })
      .then(() => {
        this.setState({
          products: arrayOfProducts
        });

      })
      .catch(err => {
        console.log(err);
      });
  }

  changeView(bool, option) {
    data.example.forEach(product => {
      if (product.id === option) {
        this.setState({
          showFullInformation: bool,
          productInformation: product
        });

      }
    });
  }


  componentDidMount() {
    this.getData();
  }



  render() {

    // console.log(this.state.relatedProductId);
    // console.log(data.example);

      return (
        <div>

          {this.state.showFullInformation ? <ProductInformation
           product = {this.state.productInformation}/>
          : <RelatedProductCard
          products = {data.example}
          changeView={this.changeView}
          />}

        </div>
      );

  }

}

export default RenderComponent;