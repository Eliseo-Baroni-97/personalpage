import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer style={styles.footer}>
      <p>
        {language === "en"
          ? "© 2024 My Website. All rights reserved."
          : "© 2024 Mi Sitio Web. Todos los derechos reservados."}
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#333",
    color: "white",
  },
};

export default Footer;
