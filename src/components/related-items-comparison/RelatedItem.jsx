import React from 'react';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard.jsx';
import ProductInformation from './ProductInformation.jsx';


class RelatedItem extends React.Component {
  constructor() {
    super();
    this.state = {
      showFullInformation: false,
      relatedProducts: [],
      productInformation: [],

    };

    this.changeView = this.changeView.bind(this);
    this.getData = this.getData.bind(this);
    this.makeArrayOfFourProducts = this.makeArrayOfFourProducts.bind(this);
  }

  makeArrayOfFourProducts(products) {
    let arrayOfProducts = [];
    let arrayOffourProducts = [];
    products.forEach(product => {
      arrayOffourProducts.push(product);
      if (arrayOffourProducts.length === 4) {
        arrayOfProducts.push(arrayOffourProducts);
        arrayOffourProducts = [];
      }
    });

    this.setState({
      relatedProducts: arrayOfProducts
    });
  }

  getData() {
    let relateditemIds = [
      19089,
      19098,
      19091,
      19092,
      19094,
      19095,
      19093,
      19096,
      19097,
      19098,
      19094,
      19091
    ];

    Promise.all(relateditemIds.map(productId => {
      return axios.get(`/productOverview/${productId}`)
        .then(product => {
          return product.data;
        });
    })).then((products) => {
      this.makeArrayOfFourProducts(products);
    })
      .catch(err => {
        console.log(err);
      });
  }

  changeView(bool, option) {
    this.state.relatedProducts.forEach(products => {
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
    if (this.state.relatedProducts.length === 0) {
      return null;
    } else {

      return (
        <div className="main" data-testid="relateditem">
          {this.state.showFullInformation ? <ProductInformation
            product={this.state.productInformation}
            changeView={this.changeView}
          />
            : <RelatedProductCard
              products={this.state.relatedProducts}
              changeView={this.changeView}
            />}

        </div>
      );
    }

  }

}

export default RelatedItem;