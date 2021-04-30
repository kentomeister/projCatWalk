import React from 'react';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.open) return null;
    return (
      <div className="write-review-background">
        <div className="write-review-form">
          <div className="form-content-cont">
            <div onClick={this.props.closeModal} className="btn-close-x">x</div>
            <div className="input-field-cont">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WriteReview;
