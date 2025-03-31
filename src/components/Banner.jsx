import React from "react";
import { useTranslation } from "react-i18next";
import "./Banner.css"; // Si no tienes reglas CSS adicionales, puedes omitir este archivo

const Banner = ({ imageSrc, altText }) => {
  const { t } = useTranslation(); // Usamos el hook de traducción

  return (
    <section className="" id="home">
      <img src="/laptop.jpg " alt={altText} className="banner-image full-screen-img"  />
      <div className="banner-content container-fluid d-flex flex-column justify-content-center align-items-center align-items-lg-start px-3 py-5">
      <h1 className="display-4 text-white">{t("nombre")}</h1>
      <h2 className="text-white ">{t("ocupacion")}</h2> {/* Traducción de la ocupación */}
      </div>
    </section>
  );
};

export default Banner;
