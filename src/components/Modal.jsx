import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, url }) => {
  if (!isOpen) {
    return null;
  }

  // Comprobar si la URL es de un archivo PDF
  const isPdf = url.toLowerCase().endsWith('.pdf');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>          &times;
        </button>
        {isPdf ? (
          <object data={url} type="application/pdf" className="modal-iframe">
            {/* Fallback por si el navegador no puede mostrar el PDF */}
            <p>
              Tu navegador no puede mostrar este archivo PDF.
              <a href={url} target="_blank" rel="noopener noreferrer">
                Descárgalo aquí para verlo.
              </a>
            </p>
          </object>
        ) : (
          <iframe src={url} title="Content" className="modal-iframe" />
        )}
      </div>
    </div>
  );
};

export default Modal;
