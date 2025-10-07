
import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, url }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <iframe src={url} title="Content" className="modal-iframe" />
      </div>
    </div>
  );
};

export default Modal;
