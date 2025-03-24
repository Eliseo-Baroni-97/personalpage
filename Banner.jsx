import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Banner.css"; // Archivo de estilos personalizados

const translations = {
  es: {
    nombre: "Baroni Eliseo",
    ocupacion: "Programador",
  },
  en: {
    nombre: "Baroni Eliseo",
    ocupacion: "Programmer",
  },
};

const Banner = ({ imageSrc, altText }) => {
  const { language } = useLanguage(); // Obtener el idioma actual
  const t = translations[language]; // Acceder a las traducciones para el idioma seleccionado

  return (
    <section className="banner">
      <img src="/laptop.jpg" alt={altText} className="banner-image" />
      <div className="banner-content">
        <h1>{t.nombre}</h1> {/* Usamos la traducción para el nombre */}
        <h2>{t.ocupacion}</h2> {/* Usamos la traducción para la ocupación */}
      </div>
    </section>
  );
};

export default Banner;
