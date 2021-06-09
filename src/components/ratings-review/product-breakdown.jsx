import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeRating: null,
      widthRating: null,
      comfortRating: null,
      qualityRating: null,
      lengthRating: null,
      fitRating: null,
    };
    this.productRatingAvg = this.productRatingAvg.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.productRatings !== this.props.productRatings) {
      const { productRatings } = this.props;
      console.log(productRatings);
      this.setState({
        sizeRating: productRatings.characteristics.Size,
        widthRating: productRatings.characteristics.Width,
        comfortRating: productRatings.characteristics.Comfort,
        qualityRating: productRatings.characteristics.Quality,
        lengthRating: productRatings.characteristics.Length,
        fitRating: productRatings.characteristics.Fit,
      });
    }
  }

  productRatingAvg(ratingsObj, charac) {
    console.log('rObj ',ratingsObj);
    var characs = ratingsObj.characteristics;
    let rating = Number(characs[charac.value]);
    console.log('ratings ', rating)

    let percentage = Math.floor((rating / 5) * 100);

    return {
      display: 'flex',
      position: 'relative',
      marginLeft: `${percentage}`,
    }
  }

  render() {
    const { productRatings } = this.props;
    if (productRatings.characteristics !== undefined) {
      const {Size, Comfort, Length, Quality, Fit, Width} = this.props.productRatings.characteristics;
      let iconSize = 8;
      let iconOffset = {
        size: Size ? (parseInt(Size.value) / 5) * 100 : 0,
        comfort: Comfort ? (parseInt(Comfort.value) / 5) * 100 : 0,
        width: Width ? (parseInt(Width.value) / 5) * 100 : 0,
        lengths: Length ? (parseInt(Length.value) / 5) * 100 : 0,
        fit: Fit ? (parseInt(Fit.value) / 5) * 100 : 0,
        quality: Quality ? (parseInt(Quality.value) / 5) * 100 : 0,
      };

      let display = {
        size: (productRatings.characteristics.Size ? 'block' : 'none'),
        comfort: (productRatings.characteristics.Comfort ? 'block' : 'none'),
        width: (productRatings.characteristics.Width ? 'block' : 'none'),
        fit: (productRatings.characteristics.Fit ? 'block' : 'none'),
        quality: (productRatings.characteristics.Quality ? 'block' : 'none'),
        lengths: (productRatings.characteristics.Length ? 'block' : 'none'),
      };
      return (
        <div className="product-breakdown-cont">
          <div className="breakdown-bar-cont" style={{ display: display.size }}>
            <div className="size-breakdown">Size</div>
            <div className="product-breakdown-bar">
              <div className="marker-cont">
                <FontAwesomeIcon style={{ marginLeft: `calc(${iconOffset.size}% - ${iconSize}px)` }} icon="caret-down" />
              </div>
            </div>
            <div className="definition-cont">
              <div className="definition-text">Too big</div>
              <div className="definition-text">Perfect size</div>
              <div className="definition-text">Too small</div>
            </div>
          </div>
          <div className="breakdown-bar-cont" style={{ display: display.width }}>
            <div className="width-breakdown">Width</div>
            <div className="product-breakdown-bar">
              <div className="marker-cont">
                <div className="test"></div>
                <FontAwesomeIcon style={{ marginLeft: `calc(${iconOffset.width}% - ${iconSize}px)` }} icon="caret-down" />
              </div>
            </div>
            <div className="definition-cont">
              <div className="definition-text">Too wide</div>
              <div className="definition-text">Perfect width</div>
              <div className="definition-text">Too narrow</div>
            </div>
          </div>
          <div className="breakdown-bar-cont" style={{ display: display.comfort }}>
            <div className="comfort-breakdown">Comfort</div>
            <div className="product-breakdown-bar">
              <div className="marker-cont">
                <FontAwesomeIcon style={{ marginLeft: `calc(${iconOffset.comfort}% - ${iconSize}px)` }} icon="caret-down" />
              </div>
            </div>
            <div className="definition-cont">
              <div className="definition-text">Bad</div>
              <div className="definition-text">Good</div>
              <div className="definition-text">Perfect</div>
            </div>
          </div>
          <div className="breakdown-bar-cont" style={{ display: display.quality }}>
            <div className="quality-breakdown">Quality</div>
            <div className="product-breakdown-bar">
              <div className="marker-cont">
                <FontAwesomeIcon style={{ marginLeft: `calc(${iconOffset.quality}% - ${iconSize}px)` }} icon="caret-down" />
              </div>
            </div>
            <div className="definition-cont">
              <div className="definition-text">Low</div>
              <div className="definition-text">Mid</div>
              <div className="definition-text">High</div>
            </div>
          </div>
          <div className="breakdown-bar-cont" style={{ display: display.lengths }}>
            <div className="length-breakdown">Length</div>
            <div className="product-breakdown-bar">
              <div className="marker-cont">
                <FontAwesomeIcon style={{ marginLeft: `calc(${iconOffset.lengths}% - ${iconSize}px)` }} icon="caret-down" />
              </div>
            </div>
            <div className="definition-cont">
              <div className="definition-text">Too long</div>
              <div className="definition-text">Perfect length</div>
              <div className="definition-text">Too short</div>
            </div>
          </div>
          <div className="breakdown-bar-cont" style={{ display: display.fit }}>
            <div className="fit-breakdown">Fit</div>
            <div className="product-breakdown-bar">
              <div className="marker-cont">
                <FontAwesomeIcon style={{ marginLeft: `calc(${iconOffset.fit}% - ${iconSize}px)` }} icon="caret-down" />
              </div>
            </div>
            <div className="definition-cont">
              <div className="definition-text">Too lose</div>
              <div className="definition-text">Perfect fit</div>
              <div className="definition-text">Too tight</div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductBreakdown;
