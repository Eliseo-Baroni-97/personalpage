import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Importamos el hook para las traducciones
import Card from "./Card";
import SkillItem from "./SkillItem"; // Asegúrate de importar SkillItem correctamente
import "./Skills.css";

const Skills = () => {
  const { t } = useTranslation(); // Usamos el hook t para las traducciones
  const [activeTab, setActiveTab] = useState("desarrollo");

  const handleTabClick = (tab) => setActiveTab(tab);

  const skillsData = {
    desarrollo: [
      { icon: "fa-brands fa-html5", name: "html5" },
      { icon: "fa-brands fa-css3-alt", name: "css3" },
      { icon: "fa-brands fa-bootstrap", name: "bootstrap" },
      { icon: "fa-brands fa-square-github", name: "git" },
      { icon: "fa-brands fa-js", name: "javascript" },
      { icon: "fa-regular fa-brain-circuit", name: "desarrolloIA" },
      { icon: "fa-brands fa-openai", name: "openai" },
      { icon: "fa-laptop-code", name: "localstorage" },
      { icon: "fa-solid fa-mug-saucer", name: "java" },
      { icon: "fa-brands fa-react", name: "react" },
      { icon: "fa-leaf", name: "mongodb" },
      { icon: "fa-database", name: "mysql" },
      { icon: "fa-shield-halved", name: "ciberseguridad" },
    ],
    diseno: [
      { icon: "fa-cube", name: "builder3d" },
      { icon: "fa-paint-brush", name: "photoshop" },
      { icon: "fa-cogs", name: "fusion360" },
      { icon: "fa-solid fa-video", name: "publisher" },
      { icon: "fa-solid fa-lightbulb", name: "lightroom" },
    ],
    personal: [
      { icon: "fa-circle-check", name: "crecer" },
      { icon: "fa-circle-check", name: "metodologiaScrum" },
      { icon: "fa-circle-check", name: "liderazgo" },
      { icon: "fa-circle-check", name: "capacidadDetalles" },
      { icon: "fa-circle-check", name: "responsabilidad" },
      { icon: "fa-circle-check", name: "creatividad" },
      { icon: "fa-circle-check", name: "herramientasDigitales" },
      { icon: "fa-circle-check", name: "ingles" },
    ],
  };

  return (
    <div className="d-flex justify-content-center">
      <Card className="p-5 bg-white rounded shadow mb-5 cardcustom">
        <ul className="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center">
          {Object.keys(skillsData).map((tab) => (
            <li key={tab} className="nav-item flex-sm-fill">
              <button
                onClick={() => handleTabClick(tab)}
                className={`nav-link text-uppercase font-weight-bold rounded-0 ${activeTab === tab ? "active" : ""}`}
              >
                {t(`habilidades${tab.charAt(0).toUpperCase() + tab.slice(1)}`)} {/* Cambié aquí */}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content mt-4">
          {Object.entries(skillsData).map(([tab, skills]) => (
            <div key={tab} className={`tab-pane fade ${activeTab === tab ? "show active" : ""}`}>
              <div className="row row-cols-2">
                {skills.map((skill) => (
                  <SkillItem key={skill.name} icon={skill.icon} name={t(skill.name)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Skills;
