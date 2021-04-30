import React, {useState, useEffect} from 'react';
import ReactModal from 'react-modal';
import StarRating from '../shared/StarRating.jsx';
import { FaWindowClose } from 'react-icons/fa';


const Modal = ({products, handleClose}) => {

  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
    handleClose();
  };


  return (
  <ReactModal isOpen={showModal}

  style={{
    overlay: {
      position: 'fixed',
      top: 200,
      left: 300,
      right: 300,
      bottom: 300,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'

    }
  }}
>
  <FaWindowClose onClick={() => handleCloseModal()} className="fa-btn" />
  <h2>Comparing</h2>
  <table>
    <thead>
      <tr>
        <th>{products[0][2].name}</th>
        <th></th>
        <th>{products[0][0].name}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{products[0][2].features[0].value}</td>
        <td>{products[0][2].features[0].feature}</td>
        <td>{products[0][0].features[0].value}</td>
      </tr>

      <tr>
        <td>{products[0][2].features[1].value}</td>
        <td>{products[0][2].features[1].feature}</td>
        <td>{products[0][0].features[1].value}</td>
      </tr>

    </tbody>
  </table>

</ReactModal>
)
};


export default Modal;