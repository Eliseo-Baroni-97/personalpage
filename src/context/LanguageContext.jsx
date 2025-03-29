import React, { createContext, useContext, useState } from "react";
import i18next from "i18next";  // Asegúrate de importar i18next

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
    i18next.changeLanguage(newLanguage);  // Cambia el idioma en i18next

    // Verificar idioma cada vez que se cambia
    console.log(`Idioma cambiado a: ${newLanguage}`);
    console.log(`Idioma actual en i18next: ${i18next.language}`);  // También verifica en i18next
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
