import React from 'react';

export const ClickTrackerContext = React.createContext();

class ClickTracker extends React.Component {
  handleClick(e) {
    const clickTrackPayload = {
      element: this.getElementClicked(e.target),
      widget: this.getWidgetClicked(e.target),
      time: new Date(),
    };
    console.log(clickTrackPayload);
  }

  getElementClicked(element) {
    if (element.id) return element.id;
    if (element.className && typeof element.className === 'string') return element.className;

    return this.getElementClicked(element.parentElement);
  }

  getWidgetClicked(element) {
    const widgetName = element.dataset.widgetName;
    if (widgetName) return widgetName;
    return this.getWidgetClicked(element.parentElement);
  }

  render() {
    return (
      <>
        <ClickTrackerContext.Provider>
          <div onClick={this.handleClick.bind(this)}>
            {this.props.children}
          </div>
        </ClickTrackerContext.Provider>
      </>
    );
  }
}

export default ClickTracker;
