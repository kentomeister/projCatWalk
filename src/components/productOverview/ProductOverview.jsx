/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import ProductInformation from './ProductInformation.jsx';
import ProductDetails from './ProductDetails.jsx';
import StyleSelect from './StyleSelect.jsx';
import ImageGallery from './ImageGallery.jsx';
import AddToBag from './AddToBag.jsx';

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
      selectedStyle: {},
      isImageGalleryExpand: false,
      bag: [],
      loading: true,
    };
    this.handleStyleSelectClick = this.handleStyleSelectClick.bind(this);
    this.handleImageContainerExpandClick = this.handleImageContainerExpandClick.bind(this);
    this.handleAddToBagSubmit = this.handleAddToBagSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('/productOverview/19093')
      .then(({ data }) => this.setState(
        {
          ...data,
          selectedStyle: data.styles[0],
          loading: false,
        },
      ))
      .catch((err) => console.error(err));
  }

  handleStyleSelectClick(selectedStyleId) {
    const { styles } = this.state;
    const [selectedStyle] = _.filter(styles, { style_id: Number(selectedStyleId) });
    this.setState({ selectedStyle });
  }

  handleImageContainerExpandClick() {
    this.setState({
      isImageGalleryExpand: !this.state.isImageGalleryExpand,
    });
  }

  handleAddToBagSubmit(e) {
    e.preventDefault();
    Promise.all([...new Array(Number(e.target.quantity.value))].map((apiCall) => axios.post('/productOverview/cart', {
      sku: e.target.skuSelect.value,
    })))
      .then((res) => console.log(res) );
  }

  render() {
    const {
      slogan,
      description,
      styles,
      selectedStyle,
      default_price,
      isImageGalleryExpand,
      loading,
    } = this.state;
    return (
      <div className="container">
        <div className="container-vert">
          <div className="container-horz">
            <ImageGallery
              images={selectedStyle.photos}
              handleImageContainerExpandClick={this.handleImageContainerExpandClick}
            />
            {
              !isImageGalleryExpand
              && (
                <div className="container-vert infos">
                  <ProductInformation
                    productData={this.state}
                    price={selectedStyle.original_price || default_price}
                  />
                  <StyleSelect
                    styles={styles}
                    selectedStyle={selectedStyle}
                    handleStyleSelectClick={this.handleStyleSelectClick}
                  />
                  {
                    !loading
                    && (
                      <AddToBag
                        handleAddToBagSubmit={this.handleAddToBagSubmit}
                        skus={selectedStyle.skus}
                      />
                    )
                  }

                </div>
              )
            }
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
