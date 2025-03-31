import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import LanguageButton from "./LanguageButton";
import "./Navbar.css"; // Asegúrate de importar el archivo CSS

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolling ? "navbar-scrolled" : "bg-transparent"}`}
    >
      <div className="container-fluid">
        {/* Redes sociales y cambio de idioma - SIEMPRE FIJOS */}
        <div className="position-absolute top-0 end-0 d-flex align-items-center gap-3 p-3">
          <a href="https://github.com/Eliseo-Baroni-97?tab=repositories" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github text-light fa-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/eliseo-baroni-b14314164/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin text-light fa-2xl"></i>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=543815123346&text&app_absent=0" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp text-light fa-2xl"></i>
          </a>
          <LanguageButton />
        </div>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav me-auto d-flex flex-column flex-lg-row gap-4 mt-4 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light fs-5" to="home" smooth={true} duration={500} offset={-120} onClick={closeNavbar}>
                {t("home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5" to="profile" smooth={true} duration={500} offset={-120} onClick={closeNavbar}>
                {t("profile")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5" to="education" smooth={true} duration={500} offset={-120} onClick={closeNavbar}>
                {t("education")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5" to="skills" smooth={true} duration={500} offset={-120} onClick={closeNavbar}>
                {t("skills")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5" to="projects" smooth={true} duration={500} offset={-120} onClick={closeNavbar}>
                {t("projectsLink")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5" to="contact" smooth={true} duration={500} offset={-120} onClick={closeNavbar}>
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
