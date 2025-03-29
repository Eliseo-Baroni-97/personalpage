import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";  // Importamos el hook de i18next
import LanguageButton from "./LanguageButton";

const Navbar = () => {
  const { t } = useTranslation(); // Usamos el hook `t` para las traducciones
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolling ? "bg-success" : "bg-transparent"}`}
      style={{
        padding: "1.5rem 0",
        minHeight: "100px",
        backgroundColor: scrolling ? "#39bb9d" : "transparent",
      }}
    >
      <div className="container-fluid">
        <ul className="navbar-nav me-auto d-flex flex-row gap-4">
          <li className="nav-item">
            <a className="nav-link text-light fs-5" href="#home">{t("home")}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fs-5" href="#profile">{t("profile")}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fs-5" href="#education">{t("education")}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fs-5" href="#skills">{t("skills")}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fs-5" href="#projects">{t("projectsLink")}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fs-5" href="#contact">{t("contact")}</a>
          </li>
        </ul>


        <div className="d-flex align-items-center gap-4">
          <a href="https://github.com/Eliseo-Baroni-97?tab=repositories" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github text-light fa-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/eliseo-baroni-b14314164/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin text-light fa-2xl"></i>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=543815123346&text&app_absent=0" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp text-light fa-2xl"></i>
          </a>
          <LanguageButton />  {/* Botón para cambiar idioma */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
