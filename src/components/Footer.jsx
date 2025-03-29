import React from "react";
import { useTranslation } from "react-i18next";
import "../components/Footer.css"; 

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>{t("copyright")}</p>
    </footer>
  );
};

export default Footer;
