import React from 'react';
import axios from 'axios';

class ClickTracker extends React.Component {
  handleClick(e) {
    const { children: child } = this.props;
    const clickTrackPayload = {
      element: this.getElementClicked(e.target),
      widget: child.type.displayName,
      time: new Date(),
    };
    axios({
      method: 'post',
      url: '/click',
      data: clickTrackPayload,
    });
  }

  getElementClicked(element) {
    if (element.id) return element.id;
    if (element.className && typeof element.className === 'string') return element.className;

    return this.getElementClicked(element.parentElement);
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        {this.props.children}
      </div>
    );
  }
}

export default ClickTracker;
