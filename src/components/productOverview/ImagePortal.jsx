import React from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '90%',
  height: '90%',
  zIndex: 4,
  transform: 'translate(-50%, -50%)',
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .9)',
  zIndex: 3,
};

const MODAL_CLOSE_ICON_STYLE = {
  position: 'relative',
  top: '60px',
  left: '94%',
};

const ImagePortal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <AiOutlineClose
            size="50"
            color="white"
            cursor="pointer"
            style={MODAL_CLOSE_ICON_STYLE}
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    </>,
    document.getElementById('portal'),
  );
};

export default ImagePortal;
