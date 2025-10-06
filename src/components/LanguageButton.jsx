import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageButton.css';

const LanguageButton = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={i18n.language === 'en'}
        onChange={toggleLanguage}
      />
      <span
        className={`slider ${i18n.language === 'en' ? 'usa' : 'argentina'}`}
      ></span>
    </label>
  );
};

export default LanguageButton;
