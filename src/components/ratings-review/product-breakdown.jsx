import React from 'react';

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { productRatings } = this.props;
    return (
      <div className="product-breakdown-cont">
        <div className="breakdown-bar-cont">
          <div className="size-breakdown">Size</div>
          <div>
            <div className="marker"></div>
          <div className="product-breakdown-bar"></div>

          </div>
          <div className="definition-cont">
            <div className="definition-text">Too big</div>
            <div className="definition-text">Perfect size</div>
            <div className="definition-text">Too small</div>
          </div>
        </div>
        <div className="breakdown-bar-cont">
          <div className="width-breakdown">Width</div>
          <div className="product-breakdown-bar"></div>
          <div className="definition-cont">
            <div className="definition-text">Too wide</div>
            <div className="definition-text">Perfect width</div>
            <div className="definition-text">Too narrow</div>
          </div>
        </div>
        <div className="breakdown-bar-cont">
          <div className="comfort-breakdown">Comfort</div>
          <div className="product-breakdown-bar"></div>
          <div className="definition-cont">
            <div className="definition-text">Bad</div>
            <div className="definition-text">Good</div>
            <div className="definition-text">Perfect</div>
          </div>
        </div>
        <div className="breakdown-bar-cont">
          <div className="quality-breakdown">Quality</div>
          <div className="product-breakdown-bar"></div>
          <div className="definition-cont">
            <div className="definition-text">Low</div>
            <div className="definition-text">Mid</div>
            <div className="definition-text">High</div>
          </div>
        </div>
        <div className="breakdown-bar-cont">
          <div className="length-breakdown">Length</div>
          <div className="product-breakdown-bar"></div>
          <div className="definition-cont">
            <div className="definition-text">Too long</div>
            <div className="definition-text">Perfect length</div>
            <div className="definition-text">Too short</div>
          </div>
        </div>
        <div className="breakdown-bar-cont">
          <div className="fit-breakdown">Fit</div>
          <div className="product-breakdown-bar"></div>
          <div className="definition-cont">
            <div className="definition-text">Too lose</div>
            <div className="definition-text">Perfect fit</div>
            <div className="definition-text">Too tight</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductBreakdown;
