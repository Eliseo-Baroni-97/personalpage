import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Modal.css';

const Modal = ({ isOpen, onClose, url }) => {
  const { t } = useTranslation();
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    // Restablecer el zoom cuando se abre una nueva modal
    setZoomLevel(1);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const isPdf = url.toLowerCase().endsWith('.pdf');

  const handleZoomIn = () => {
    setZoomLevel(prevZoom => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoom => Math.max(0.2, prevZoom - 0.1)); // Evita que el zoom sea demasiado pequeño
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  // No se añade #toolbar=0 para permitir la interacción con el PDF si es necesario
  const displayUrl = isPdf ? `${url}` : url;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {isPdf && (
          <div className="pdf-controls">
            <button onClick={handleZoomOut}><i className="fas fa-search-minus"></i> {t('zoomOut')}</button>
            <button onClick={handleResetZoom}><i className="fas fa-sync-alt"></i> {t('resetZoom')}</button>
            <button onClick={handleZoomIn}><i className="fas fa-search-plus"></i> {t('zoomIn')}</button>
          </div>
        )}
        <div className="modal-body" style={{ transform: `scale(${zoomLevel})` }}>
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
    </div>
  );
};

export default Modal;
