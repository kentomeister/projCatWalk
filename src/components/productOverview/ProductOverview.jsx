/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import ProductInformation from './ProductInformation.jsx';
import ProductDetails from './ProductDetails.jsx';
import StyleSelect from './StyleSelect.jsx';
import ImageGallery from './ImageGallery.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      avgRating: '0',
      name: '',
      category: '',
      default_price: '',
      description: '',
      slogan: '',
      styles: [],
      selectedStyle: {}
    };
    this.handleStyleSelectClick = this.handleStyleSelectClick.bind(this);
  }

  componentDidMount() {
    axios.get('/productOverview/19091')
      .then(({ data }) => this.setState(
        {
          ...data,
          selectedStyle: data.styles[0],
        },
      ))
      .catch((err) => console.log(err));
  }

  handleStyleSelectClick(selectedStyleId) {
    const { styles } = this.state;
    const [selectedStyle] = _.filter(styles, { style_id: Number(selectedStyleId) });
    this.setState({ selectedStyle });
  }

  render() {
    const {
      slogan,
      description,
      styles,
      selectedStyle,
      default_price
    } = this.state;
    return (
      <div className="container">
        <div className="container-vert">
          <div className="container-horz">
            <ImageGallery
              images={selectedStyle.photos}
            />
            <div className="container-vert">
              <ProductInformation
                productData={this.state}
                price={selectedStyle.original_price || default_price}
              />
              <StyleSelect
                styles={styles}
                selectedStyle={selectedStyle}
                handleStyleSelectClick={this.handleStyleSelectClick}
              />
              <div className="add-to-bag">
                Add to bag
              </div>
            </div>
          </div>
          <ProductDetails
            slogan={slogan}
            description={description}
          />
        </div>
      </div>
    );
  }
}

export default ProductOverview;
