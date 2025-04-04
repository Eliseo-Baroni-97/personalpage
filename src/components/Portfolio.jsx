import React from "react";
import { useTranslation } from "react-i18next"; // Importamos el hook useTranslation
import Card from "./Card"; // Reutilizamos el componente Card para las tarjetas principales y pequeñas
import "./Portfolio.css";

const Portfolio = () => {
  const { t } = useTranslation(); // Usamos el hook t para las traducciones
  const projects = [
    {
      id: 1,
      title: t("projects.1.title"),
      description: t("projects.1.description"),
      url: "https://maravilloso-mundo.netlify.app/index.html",
      imgSrc: "Maravilloso-mundo.jpg",
      badgeClass: "bg-danger", 
      badgeText: t("projects.1.badgeText"),
      type: t("projects.1.type"),
    },
    {
      id: 2,
      title: t("projects.2.title"),
      description: t("projects.2.description"),
      url: "https://rollingnews.netlify.app/",
      imgSrc: "Rolling-news.jpg",
      badgeClass: "bg-danger", 
      badgeText: t("projects.2.badgeText"),
      type: t("projects.2.type"),
    },
    {
      id: 3,
      title: t("projects.3.title"),
      description: t("projects.3.description"),
      url: "#",
      imgSrc: "Rolling-Ubisoft.jpg",
      badgeClass: "bg-danger", 
      badgeText: t("projects.3.badgeText"),
      type: t("projects.3.type"),
    },
    {
      id: 4,
      title: t("projects.4.title"),
      description: t("projects.4.description"),
      url: "https://github.com/Eliseo-Baroni-97/Discord-bot",
      imgSrc: "discord.png",
      badgeClass: "bg-primary", 
      badgeText: t("projects.4.badgeText"),
      type: t("projects.4.type"),
    },
    {
      id: 5,
      title: t("projects.5.title"),
      description: t("projects.5.description"),
      url: "https://github.com/Eliseo-Baroni-97/Discord-bot",
      imgSrc: "webPersonal.png",
      badgeClass: "bg-primary", 
      badgeText: t("projects.5.badgeText"),
      type: t("projects.5.type"),
    }
  ];

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-5 bg-white rounded shadow mb-5 cardcustom">
        <div className="row justify-content-center">
          {projects.map((project) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-4 d-flex justify-content-center"
              key={project.id}
            >
              <Card
                className="bg-white rounded shadow d-flex flex-column h-100"
                paddingClass={project.imgSrc ? "p-0" : "p-5"}
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="img-fluid card-img-top"
                    style={{
                      borderTopLeftRadius: "0.25rem",
                      borderTopRightRadius: "0.25rem",
                    }}
                  />
                </a>
                <div className="p-4 flex-grow-1">
                  <h5>
                    <a href={project.url} target="_blank" className="text-dark">
                      {project.title}
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">{project.description}</p>
                </div>
                <div className="mt-auto p-4">
                  <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2">
                    <p className="small mb-0">
                      <span className="font-weight-bold">{project.type}</span>
                    </p>
                    <div
                      className={`badge ${project.badgeClass} ml-3 rounded-pill font-weight-normal`}
                    >
                      {project.badgeText}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Portfolio;
