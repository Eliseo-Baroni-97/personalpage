import React from "react";
import { useTranslation } from "react-i18next";
import "./Banner.css"; // Archivo de estilos personalizados

const Banner = ({ imageSrc, altText }) => {
  const { t } = useTranslation(); // Usamos el hook de traducción

  return (
    <section className="banner">
      <img src="/laptop.jpg" alt={altText} className="banner-image" />
      <div className="banner-content">
        <h1>{t("nombre")}</h1> {/* Traducción del nombre */}
        <h2>{t("ocupacion")}</h2> {/* Traducción de la ocupación */}
      </div>
    </section>
  );
};

export default Banner;