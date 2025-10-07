
import React from "react";
import "./Timeline.css"; // Usa los mismos estilos

const TimelineItem = ({ title, text, isEven, url, onItemClick }) => {
  const handleItemClick = () => {
    if (url && onItemClick) {
      onItemClick(url);
    }
  };

  // Determina si el item es clickeable para añadir la clase y el evento
  const isClickable = url ? "timeline-item-link" : "";
  const onClickHandler = url ? handleItemClick : null;

  return (
    <div className={`card ${isEven ? "even" : "odd"}`}>
      <div
        className={`info ${isClickable}`}
        onClick={onClickHandler}
      >
        <h3 className="title">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
