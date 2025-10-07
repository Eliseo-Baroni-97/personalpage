import React, { useState } from "react";
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
import Modal from "./components/Modal";

const App = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");

  const handleOpenModal = (url) => {
    setModalUrl(url);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalUrl("");
  };

  const educationItems = [
    { titleKey: "licenciaturaCienciasComputacion", textKey: "licenciaturaCienciasComputacionText", url: "#" },
    { titleKey: "iaCourseTitle", textKey: "iaCourseText", dateKey: "iaCourseDate", url: "/certificates/Curso de Iniciacion al Desarrollo con IA.pdf" },
    { titleKey: "englishForDevelopersTitle", textKey: "englishForDevelopersText", dateKey: "englishForDevelopersDate", url: "#" },
    { titleKey: "jovenInversorTitle", textKey: "jovenInversorText", dateKey: "jovenInversorDate", url: "#" },
    { titleKey: "programadorFullStack", textKey: "programadorFullStackText", url: "#" },
    { titleKey: "cursoInglesAdultos", textKey: "cursoInglesAdultosText", url: "#" },
    { titleKey: "analistaProgramador", textKey: "analistaProgramadorText", url: "#" },
    { titleKey: "ingenieriaSistemas", textKey: "ingenieriaSistemasText", url: "#" },
    { titleKey: "tecnicoIT", textKey: "tecnicoITText", url: "#" },
    { titleKey: "tecnicoReparacionPC", textKey: "tecnicoReparacionPCText", url: "#" },
  ];

  const experienceItems = [
    { titleKey: "fundacionSolTitle", textKey: "fundacionSolDescription", dateKey: "fundacionSolDate" },
    { titleKey: "seccionAlumnosTitle", textKey: "seccionAlumnosDescription", dateKey: "seccionAlumnosDate" },
  ];

  return (
    <>
      <Banner altText={t("bannerAlt")} />
      <Navbar />
      <HeroSection /> 
      <SectionTitle titleKey="datosPersonales" icon="fa-address-card" />
      <PersonalData />
      
      <SectionTitle titleKey="formacion" icon="fa-graduation-cap" id="education"/> 
      <Timeline titleKey="timelineFormacion" items={educationItems} onItemClick={handleOpenModal} />

      <SectionTitle titleKey="habilidades" icon="fa-regular fa-star" id="skills"  />
      <Skills />

      <SectionTitle titleKey="experienciaLaboral" icon="fa-briefcase" id="experience"/> 
      <Timeline titleKey="experienciaLaboral" items={experienceItems} className="timeline-experiencia" />

      <SectionTitle titleKey="portafolio" icon="fa-solid fa-briefcase" id="projects"/>
      <Portfolio /> 
      <SectionTitle titleKey="contacto" icon="fa-paper-plane"  id="contact"/> 
      <Contact /> 
      <Footer />
      <Modal isOpen={modalOpen} onClose={handleCloseModal} url={modalUrl} />
    </>
  );
};

export default App;
