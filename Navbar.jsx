import React, { useEffect, useState } from "react";
import LanguageButton from "./LanguageButton";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    home: "Inicio",
    perfil: "Perfil",
    formacion: "Formación",
    habilidades: "Habilidades",
    proyectos: "Proyectos",
    contacto: "Contacto",
  },
  en: {
    home: "Home",
    perfil: "Profile",
    formacion: "Education",
    habilidades: "Skills",
    proyectos: "Projects",
    contacto: "Contact",
  },
};

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language];
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
      className={`navbar navbar-expand-lg fixed-top ${scrolling ? "bg-dark" : "bg-transparent"}`}
      style={{
        padding: "1.5rem 0", // Aumenta el espacio vertical del navbar
        minHeight: "100px", // Altura mínima del navbar
      }}
    >
      <div className="container-fluid">
        {/* Menú de navegación alineado a la izquierda */}
        <ul className="navbar-nav me-auto d-flex flex-row gap-4">
          {Object.entries(t).map(([key, value]) => (
            <li className="nav-item" key={key}>
              <a className="nav-link text-light fs-5" href={`#${key}`}>
                {value}
              </a>
            </li>
          ))}
        </ul>

        {/* Redes sociales e idioma alineados a la derecha */}
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
          <LanguageButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
