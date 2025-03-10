import React from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    datosPersonales: "Datos Personales",
    formacion: "Formación",
    habilidades: "Habilidades",
    portafolio:"Portafolio",
    contacto:"Contacto"
  },
  en: {
    datosPersonales: "Personal Data",
    formacion: "Education",
    habilidades: "Skills",
    portafolio: "Portfolio",
    contacto: "Contact"
  },
  
  
};

const SectionTitle = ({ titleKey, icon }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const title = t[titleKey]; // Usar el key del título para obtener la traducción

  return (
    <div className="px-5 d-flex align-items-center mb-2 p-0">
      <div className="p-1">
        <i className={`fa-solid ${icon} fa-xl`}></i>
      </div>
      <div className="p-1">
        <h4 className="fs-4 fw-bolder mb-0">{title}</h4>
      </div>
      <div className="flex-grow-1">
        <hr className="mb-0" />
      </div>
    </div>
  );
};

export default SectionTitle;
