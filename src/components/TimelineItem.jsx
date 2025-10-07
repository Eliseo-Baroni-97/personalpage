import React from "react";
import "./Timeline.css"; // Usa los mismos estilos

const TimelineItem = ({ title, text, isEven, url }) => {
  const content = (
    <div className={`card ${isEven ? "even" : "odd"}`}>
      <div className="info">
        <h3 className="title">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="timeline-item-link">
        {content}
      </a>
    );
  }

  return content;
};

export default TimelineItem;
