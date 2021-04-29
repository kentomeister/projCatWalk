/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import RatingsReviews from './components/ratings-review/ratings-reviews.jsx';
import ProductQuestionManager from './components/q&a/ProductQuestionManager/main.jsx'
import ProductOverview from './components/productOverview/ProductOverview.jsx';
import Alert from './components/shared/Alert.jsx';
import RelatedItem from './components/related-items-comparison/RelatedItem.jsx';
import Header from './components/header/Header.jsx';

import ClickTracker from './components/shared/click-tracker/ClickTracker.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productId: '19093',
      alert: {
        message: '',
        type: '',
      },
      loading: true,
    };
    this.setAlert = this.setAlert.bind(this);
    this.getCart = this.getCart.bind(this);
  }

  componentDidMount() {
    Promise.all([
      this.getCart(),
      this.getProductData(),
    ])
      .then(() => this.setState({ loading: false }))
      .catch(() => this.setAlert('There was an error loading from the API', 'danger'));
  }

  setAlert(message, type) {
    this.setState({
      alert: {
        message,
        type,
      },
    });

    setTimeout(() => {
      this.setState({
        alert: {},
      });
    }, 2000);
  }

  getCart() {
    return axios.get('/cart')
      .then(({ data: cartContents }) => this.setState({ cart: cartContents }))
      .then(() => this.calculateNumOfItemsInCart())
      .catch(() => this.setAlert('There was an error getting the cart', 'danger'));
  }

  getProductData() {
    const { productId } = this.state;
    return axios.get(`/productOverview/${productId}`)
      .then(({ data }) => this.setState(
        {
          ...data,
          selectedStyle: data.styles[0],
        },
      ));
  }

  calculateNumOfItemsInCart() {
    const { cart } = this.state;
    const numOfItems = _.reduce(cart, (memo, item) => memo + Number(item.count), 0);
    this.setState({ cartNumOfItems: numOfItems.toString() });
  }

  render() {
    const {
      alert: { message, type },
      productId,
      loading,
      cartNumOfItems,
      name,
    } = this.state;

    if (loading) {
      return (
        <div>
          LOADING;
        </div>
      );
    }
    return (
      <div className="container">
        <Header
          itemsInCart={cartNumOfItems}
        />
        {
          alert
          && <Alert message={message} type={type} />
        }
        <ClickTracker>
          <ProductOverview
            setAlert={this.setAlert}
            productId={productId}
            updateCart={this.getCart}
            productInfo={this.state}
          />
        </ClickTracker>
        <ClickTracker>
          <RelatedItem />
        </ClickTracker>
        <ClickTracker>
          <ProductQuestionManager
            productId={productId}
            setAlert={this.setAlert}
            productName={name}
          />
        </ClickTracker>
        <ClickTracker>
          <RatingsReviews
            productId={productId}
            productName={name}
          />
        </ClickTracker>
        <div className="footer">

        </div>
      </div>
    );
  }
}

export default App;
