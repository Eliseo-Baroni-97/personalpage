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

  const handleItemClick = (url) => {
    if (url && url !== "#") {
      setModalUrl(url);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalUrl("");
  };

  const educationItems = [
    { titleKey: "licenciaturaCienciasComputacionTitle", placeKey: "licenciaturaCienciasComputacionPlace", dateKey: "licenciaturaCienciasComputacionDate", textKey: "licenciaturaCienciasComputacionText", url: "#" },
    { titleKey: "iaCourseTitle", placeKey: "iaCoursePlace", dateKey: "iaCourseDate", textKey: "iaCourseText", url: "/certificates/Curso de Iniciacion al Desarrollo con IA.pdf" },
    { titleKey: "englishForDevelopersTitle", placeKey: "englishForDevelopersPlace", dateKey: "englishForDevelopersDate", textKey: "englishForDevelopersText", url: "#" },
    { titleKey: "jovenInversorTitle", placeKey: "jovenInversorPlace", dateKey: "jovenInversorDate", textKey: "jovenInversorText", url: "#" },
    { titleKey: "programadorFullStackTitle", placeKey: "programadorFullStackPlace", dateKey: "programadorFullStackDate", textKey: "programadorFullStackText", url: "#" },
    { titleKey: "cursoInglesAdultosTitle", placeKey: "cursoInglesAdultosPlace", dateKey: "cursoInglesAdultosDate", textKey: "cursoInglesAdultosText", url: "/certificates/aticana.pdf" },
    { titleKey: "introduccionPentestingTitle", placeKey: "introduccionPentestingPlace", dateKey: "introduccionPentestingDate", textKey: "introduccionPentestingText", url: "/certificates/Introduccion al Pentesting.pdf" },
    { titleKey: "analistaProgramadorTitle", placeKey: "analistaProgramadorPlace", dateKey: "analistaProgramadorDate", textKey: "analistaProgramadorText", url: "#" },
    { titleKey: "ingenieriaSistemasTitle", placeKey: "ingenieriaSistemasPlace", dateKey: "ingenieriaSistemasDate", textKey: "ingenieriaSistemasText", url: "#" },
    { titleKey: "tecnicoITTitle", placeKey: "tecnicoITPlace", dateKey: "tecnicoITDate", textKey: "tecnicoITText", url: "/certificates/TituloSec.pdf" },
    { titleKey: "tecnicoReparacionPCTitle", placeKey: "tecnicoReparacionPCPlace", dateKey: "tecnicoReparacionPCDate", textKey: "tecnicoReparacionPCText", url: "/certificates/Reparador-de-Pc.pdf" },
  ];

  const experienceItems = [
    { titleKey: "fundacionSolTitle", placeKey: "fundacionSolPlace", dateKey: "fundacionSolDate", textKey: "fundacionSolDescription" },
    { titleKey: "seccionAlumnosTitle", placeKey: "seccionAlumnosPlace", dateKey: "seccionAlumnosDate", textKey: "seccionAlumnosDescription" },
  ];

  return (
    <>
      <Banner altText={t("bannerAlt")} />
      <Navbar />
      <HeroSection /> 
      <SectionTitle titleKey="datosPersonales" icon="fa-address-card" />
      <PersonalData />
      
      <SectionTitle titleKey="formacion" icon="fa-graduation-cap" id="education"/> 
      <Timeline titleKey="timelineFormacion" items={educationItems} onItemClick={handleItemClick} />

      <SectionTitle titleKey="habilidades" icon="fa-regular fa-star" id="skills"  />
      <Skills />

      <SectionTitle titleKey="experienciaLaboral" icon="fa-briefcase" id="experience"/> 
      <Timeline titleKey="timelineExperiencia" items={experienceItems} className="timeline-experiencia" onItemClick={handleItemClick} />

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
