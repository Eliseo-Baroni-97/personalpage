import React from "react";
import Card from "./Card"; // Reutilizamos el componente Card para las tarjetas principales y pequeñas.
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    projects: [
      {
        id: 1,
        title: "Maravilloso Mundo",
        description: "Proyecto de un blog de viajes que nos invita a conocer distintos lugares del mundo.",
        url: "https://maravilloso-mundo.netlify.app/index.html",
        imgSrc: "Maravilloso-mundo.jpg",
        badgeClass: "badge-danger",
        badgeText: "Proyecto-Rolling",
        type: "Blog de viajes",
      },
      {
        id: 2,
        title: "Rolling News",
        description: "Proyecto de una página de noticias, pronóstico del tiempo y precio de moneda.",
        url: "https://rollingnews.netlify.app/",
        imgSrc: "Rolling-news.jpg",
        badgeClass: "badge-danger",
        badgeText: "Proyecto-Rolling",
        type: "Noticias",
      },
      {
        id: 3,
        title: "Rolling Ubisoft",
        description: "Proyecto de una página de juegos basada en la plataforma Ubisoft.",
        url: "#",
        imgSrc: "Rolling-Ubisoft.jpg",
        badgeClass: "badge-danger",
        badgeText: "Proyecto-Rolling",
        type: "Videojuegos",
      },
      {
        id: 4,
        title: "Discord Bot",
        description: "Un bot de Discord creado con JavaScript que permite asignar roles y enviar mensajes automáticos.",
        url: "https://github.com/Eliseo-Baroni-97/Discord-bot",
        imgSrc: "discord.png",
        badgeClass: "badge-primary",
        badgeText: "Personal",
        type: "Proyecto personal",
      },
    ],
  },
  en: {
    projects: [
      {
        id: 1,
        title: "Wonderful World",
        description: "A travel blog project inviting us to discover different places around the world.",
        url: "https://maravilloso-mundo.netlify.app/index.html",
        imgSrc: "Maravilloso-mundo.jpg",
        badgeClass: "badge-danger",
        badgeText: "Rolling Project",
        type: "Travel Blog",
      },
      {
        id: 2,
        title: "Rolling News",
        description: "A news website project, including weather forecasts and currency prices.",
        url: "https://rollingnews.netlify.app/",
        imgSrc: "Rolling-news.jpg",
        badgeClass: "badge-danger",
        badgeText: "Rolling Project",
        type: "News",
      },
      {
        id: 3,
        title: "Rolling Ubisoft",
        description: "A gaming page project inspired by the Ubisoft platform.",
        url: "#",
        imgSrc: "Rolling-Ubisoft.jpg",
        badgeClass: "badge-danger",
        badgeText: "Rolling Project",
        type: "Video Games",
      },
      {
        id: 4,
        title: "Discord Bot",
        description: "A Discord bot built with JavaScript that assigns roles and sends automatic messages.",
        url: "https://github.com/Eliseo-Baroni-97/Discord-bot",
        imgSrc: "discord.png",
        badgeClass: "badge-primary",
        badgeText: "Personal",
        type: "Personal Project",
      },
    ],
  },
};

const Portfolio = () => {
  const { language } = useLanguage();
  const { projects } = translations[language];

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-5 bg-white rounded shadow mb-5">
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
