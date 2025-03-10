import React from "react";
import "./Banner.css";  // Archivo de estilos personalizados

const Banner = ({ imageSrc, altText, title }) => {
  return (
    <section className="banner">
      <img src="/laptop.jpg" alt={altText} className="banner-image" />
      <div className="banner-content">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default Banner;
