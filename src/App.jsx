import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PersonalData from "./components/PersonalData";
import SectionTitle from "./components/SectionTitle";
import SkillsTimeline from './components/SkillsTimeline';
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact"; 

const App = () => {
  return (
    <LanguageProvider>
      <Banner />
      <Navbar />
      <HeroSection />
      <SectionTitle titleKey="datosPersonales" icon="fa-address-card" />
      <PersonalData />
      <SectionTitle titleKey="formacion" icon="fa-graduation-cap" />
      <SkillsTimeline />
      <SectionTitle titleKey="habilidades" icon="<fa-regular fa-star" />
      <Skills/>
      <SectionTitle titleKey="portafolio" icon="fa-solid fa-briefcase" />
      <Portfolio />
      <SectionTitle titleKey="contacto" icon="fa-paper-plane" />
      
      <Contact />
      <Footer />
    </LanguageProvider>
  );
};

export default App;
