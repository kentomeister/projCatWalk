/* eslint-disable import/extensions */
import React from 'react';
import ProductOverview from './components/productOverview/ProductOverview.jsx';
import Alert from './components/shared/Alert.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      alert: {
        message: '',
        type: '',
      },
    };
    this.setAlert = this.setAlert.bind(this);
  }

  setAlert(message, type) {
    this.setState({
      ...this.state,
      alert: {
        message,
        type,
      },
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        alert: {},
      });
    }, 2000);
  }

  render() {
    const { alert: { message, type } } = this.state;
    return (
      <div className="container">
        {
          alert
            && <Alert message={message} type={type} />
        }
        <ProductOverview
          setAlert={this.setAlert}
        />
      </div>
    );
  }
}

export default App;
