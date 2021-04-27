import React from 'react';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard.jsx';
import ProductInformation from './ProductInformation.jsx';
import { data } from './exampleData.jsx';

class RelatedItem extends React.Component {
  constructor() {
    super();
    this.state = {
      showFullInformation: false,
      relatedProducts: [],
      relatedProductIds: [],
      productInformation: [],

    };

    this.changeView = this.changeView.bind(this);
    this.getData = this.getData.bind(this);
  }


  getData() {
    const arrayOfProducts = [];
    const prods = [];
    axios.get('/relatedProductId/19097')
      .then(res => {

        res.data.forEach(productId => {
          axios.get(`/productOverview/${productId}`)
            .then(resData => {
              if (arrayOfProducts.length === 4) {
               prods.push(arrayOfProducts);
                arrayOfProducts.splice(0, 4);
              } else {
                arrayOfProducts.push(resData.data);
              }
              return prods;
            });
        })
        .then ((data) => {
          this.setState({
            relatedProducts: data
          });
          console.log(data);
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


  componentDidMount() {
    this.getData();
  }

  render() {

    return (
      <div className="main">
        {this.state.showFullInformation ? <ProductInformation
          product={this.state.productInformation}
          changeView = {this.changeView}
          />
          : <RelatedProductCard
            products={data}
            changeView={this.changeView}
          />}

      </div>
    );

  }

}

export default RelatedItem;