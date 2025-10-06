import React from "react";
import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PersonalData from "./components/PersonalData";
import SectionTitle from "./components/SectionTitle";
import Timeline from './components/Timeline';
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  const { t } = useTranslation();

  // Datos para la línea de tiempo de Formación
  const educationItems = [
    { titleKey: "licenciaturaCienciasComputacion", textKey: "licenciaturaCienciasComputacionText" },
    { titleKey: "programadorFullStack", textKey: "programadorFullStackText" },
    { titleKey: "cursoInglesAdultos", textKey: "cursoInglesAdultosText" },
    { titleKey: "analistaProgramador", textKey: "analistaProgramadorText" },
    { titleKey: "ingenieriaSistemas", textKey: "ingenieriaSistemasText" },
    { titleKey: "tecnicoIT", textKey: "tecnicoITText" },
    { titleKey: "tecnicoReparacionPC", textKey: "tecnicoReparacionPCText" },
  ];

  // Datos para la línea de tiempo de Experiencia Laboral
  const experienceItems = [
    { titleKey: "seccionAlumnosTitle", textKey: "seccionAlumnosDescription", dateKey: "seccionAlumnosDate" },
    { titleKey: "fundacionSolTitle", textKey: "fundacionSolDescription", dateKey: "fundacionSolDate" },
  ];

  return (
    <>
      <Banner altText={t("bannerAlt")} />
      <Navbar />
      <HeroSection /> 
      <SectionTitle titleKey="datosPersonales" icon="fa-address-card" />
      <PersonalData />
      
      <SectionTitle titleKey="formacion" icon="fa-graduation-cap" id="education"/> 
      <Timeline titleKey="timelineFormacion" items={educationItems} />

      <SectionTitle titleKey="experienciaLaboral" icon="fa-briefcase" id="experience"/> 
      <Timeline titleKey="experienciaLaboral" items={experienceItems} />

      <SectionTitle titleKey="habilidades" icon="fa-regular fa-star" id="skills"  />
      <Skills />
      <SectionTitle titleKey="portafolio" icon="fa-solid fa-briefcase" id="projects"/>
      <Portfolio /> 
      <SectionTitle titleKey="contacto" icon="fa-paper-plane"  id="contact"/> 
      <Contact /> 
      <Footer />
    </>
  );
};

export default App;
