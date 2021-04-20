import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import ProductInformation from './ProductInformation.jsx';


class RenderComponent extends React.Component {
  constructor () {
    super();
    this.state = {
      show: false
    };

    this.changeView = this.changeView.bind(this);
  }

changeView (option) {
  this.setState({
    show: option
  });
}




render () {

  return (
    <div>
      {this.state.show ? <ProductInformation /> : <RelatedProductCard changeView = {this.changeView}/>}
    </div>
  );
}

}

export default RenderComponent;