import React from "react";
import "./HeroSection.css";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    name: "Sobre mi",
    description: "Desarrollador full stack con experiencia en programación web. Dominio básico de varios lenguajes de programación. Capaz de autogestión eficaz en proyectos independientes y buenas habilidades de colaboración dentro de un equipo productivo.",
    downloadCV: "Descargar CV",
  },
  en: {
    name: "About me ",
    description: "Full stack developer with web programming experience. Basic mastery of various programming languages. Capable of effective self-management in independent projects and strong collaboration skills within a productive team.",
    downloadCV: "Download CV",
  },
};

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hero-section">
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/Frente.png"
                      className="d-block w-100 rounded-circle"
                      alt="Imagen 1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card-back d-flex flex-column align-items-center justify-content-center">
              <img
                src="/Fondo.png"
                alt="Imagen trasera"
                className="rounded-circle mb-3"
              />
            </div>
          </div>
        </div>

        {/* Contenedor del texto */}
        <div className="text-container">
          <h1>{t.name}</h1>
          <p className="text-justify my-4">{t.description}</p>
          <a
            className="botones"
            href="https://drive.google.com/file/d/1mrIBSq0ASkKxcSVhk6bIHdTfly5Tkc9J/view?usp=sharing"
          >
            <button className="btn btn-outline-success btn-lg botones">
              {t.downloadCV}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
