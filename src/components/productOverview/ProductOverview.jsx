import React from 'react';
import axios from 'axios';

// eslint-disable-next-line import/extensions
import ProductInformation from './ProductInformation.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRating: '0',
      name: '',
      category: '',
      default_price: '',
    };
  }

  componentDidMount() {
    axios.get('/productOverview/19092')
      .then((res) => this.setState(res.data))
      .catch((err) => null);
  }

  render() {
    return (
      <div className="container">
        <div className="container-vert">
          <div className="container-horz">
            <div className="image-gallery">
              image Gallery
            </div>
            <div className="container-vert">
              <ProductInformation
                productData={this.state}
              />
              <div className="category-select">
                Category Select
              </div>
              <div className="add-to-bag">
                Add to bag
              </div>
            </div>
          </div>
          <div className="product-details">
            I am the product details Component
          </div>
        </div>
      </div>
    );
  }
}

export default ProductOverview;
