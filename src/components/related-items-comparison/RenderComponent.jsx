import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import ProductInformation from './ProductInformation.jsx';
import axios from 'axios';
import {data} from './exampleData.jsx';

class RenderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showFullInformation: false,
      relatedProducts: [],
      relatedProductIds: [],
      productInformation: [],
      call: false
    };

    this.changeView = this.changeView.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData() {
    let arrayOfProducts = [];
    axios.get('/relatedProductId/19097')
      .then(res => {
        this.setState({
          relatedProductId: res.data
        });
      }).then(() => {
        const productIds = this.state.relatedProductId;
        productIds.map(productId => {
          axios.get(`/productOverview/${productId}`)
            .then(resData => {

              this.state.relatedProducts = this.state.relatedProducts.concat(resData.data);
              this.setState({
                call: true
              })
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeView(bool, option) {

       data.forEach(products => {
         products.forEach(product => {
          if (option === product.id) {
            this.setState({
              showFullInformation: bool,
              productInformation: product
            });

           }
         });
       });

    }

  render() {
      return (
        <div>
          {this.state.showFullInformation ? <ProductInformation
           product = {this.state.productInformation}/>
           : <RelatedProductCard
           products = {data}
           changeView={this.changeView}
           />}

        </div>
      );

  }

}

export default RenderComponent;