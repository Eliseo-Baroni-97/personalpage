import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./LanguageButton.css"; // Importa el archivo de estilo

const LanguageButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <label className="switch">
      <input type="checkbox" checked={language === "en"} onChange={toggleLanguage} />
      <span className="slider"></span>
      <span className="language-text">
        {language === "en" ? "Español" : "English"}
      </span>
    </label>
  );
};

export default LanguageButton;
