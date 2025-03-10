import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      {language === "en" ? "Español" : "English"}
    </button>
  );
};

export default LanguageButton;
