import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, url }) => {
  if (!isOpen) {
    return null;
  }

  const isPdf = url.toLowerCase().endsWith('.pdf');

  // Si es un PDF, añadimos parámetros para ocultar la barra de herramientas y centrar el contenido.
  const displayUrl = isPdf ? `${url}#toolbar=0&view=Fit` : url;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>          &times;
        </button>
        {isPdf ? (
          <object data={displayUrl} type="application/pdf" className="modal-iframe">
            <p>
              Tu navegador no puede mostrar este archivo PDF.
              <a href={url} target="_blank" rel="noopener noreferrer">
                Descárgalo aquí para verlo.
              </a>
            </p>
          </object>
        ) : (
          <iframe src={displayUrl} title="Content" className="modal-iframe" />
        )}
      </div>
    </div>
  );
};

export default Modal;
