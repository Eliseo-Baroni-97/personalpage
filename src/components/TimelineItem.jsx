import React from "react";
import "./Timeline.css"; // Usa los mismos estilos

const TimelineItem = ({ title, text, isEven }) => {
  return (
    <div className={`card ${isEven ? "even" : "odd"}`}>
      <div className="info">
        <h3 className="title">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
