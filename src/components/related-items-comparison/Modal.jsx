import React from 'react';
import ReactModal from 'react-modal';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Compare</button>
        <ReactModal
          isOpen={this.state.showModal}
          // contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close</button>
          <table>
            <thead>
              <tr>
                <th>Current Product Name</th>
                <th>Characteristic</th>
                <th>Compared Product Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Some stuff here</td>
                <td>Some stuff here</td>
                <td>Some stuff here</td>
              </tr>
            </tbody>
          </table>



        </ReactModal>

      </div>
    );
  }
}


export default Modal;