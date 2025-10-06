import React from "react";
import "./HeroSection.css";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    name: "Sobre mí",
    description: "Desarrollador full stack con experiencia en programación web. -- ¡ESTE ES EL TEST DE DEPLOY EN VIVO! --",
    downloadCV: "Descargar CV",
  },
  en: {
    name: "About me",
    description: "Full stack developer with web programming experience. -- THIS IS THE LIVE DEPLOY TEST! --",
    downloadCV: "Download CV",
  },
};

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hero-section container-fluid" id="profile">
      <div className="row d-flex align-items-center justify-content-center">
        
        {/* Columna de la imagen */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="/Frente.png" className="d-block w-100 rounded-circle" alt="Imagen 1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-card-back d-flex flex-column align-items-center justify-content-center">
                <img src="/Fondo.png" alt="Imagen trasera" className="rounded-circle mb-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Columna del texto */}
        <div className="col-md-6 text-container">
          <h1>{t.name}</h1>
          <p className="my-4">{t.description}</p>
          <a href="https://drive.google.com/file/d/1mrIBSq0ASkKxcSVhk6bIHdTfly5Tkc9J/view?usp=sharing">
            <button className="btn btn-outline-success btn-lg">{t.downloadCV}</button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
