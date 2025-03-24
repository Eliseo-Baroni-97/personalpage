import React from "react";
import Card from "./Card";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

const timelineData = [
  { title: "Licenciatura en Ciencias de la Computación", text: "Universidad Siglo 21. 2021 - Presente. Actualmente cursando la carrera, enfocándome en análisis de datos, optimización de recursos, seguridad en redes y desarrollo de soluciones." },
  { title: "Programador Full Stack", text: "RollingCode. 2020. Experiencia en programación web con herramientas y conceptos como metodología Scrum, HTML5, CSS3, Bootstrap 4, GIT, JavaScript, LocalStorage, React.js, MongoDB, entre otros." },
  { title: "Curso de Inglés para Adultos", text: "A.T.I.C.A.N.A. 2021. Inglés intermedio con enfoque en comunicación y comprensión escrita." },
  { title: "Analista de Conocimientos, Programador Dimensión", text: "Plan 111mil. 2017. Capacitación en conocimientos básicos de Java y Programación Orientada a Objetos." },
  { title: "Ingeniería en Sistemas", text: "UTN. 2016. Adquirí conocimientos fundamentales en desarrollo de software, análisis de sistemas e infraestructura IT." },
  { title: "Técnico Profesional y Personal en IT", text: "Escuela Técnica N°5. 2015. Formación secundaria técnica con conocimientos en informática y tecnología." },
  { title: "Técnico en Reparación de PC", text: "UTN. 2014. Diagnóstico y reparación de hardware, sistemas operativos y solución de problemas en redes." }
];

const Timeline = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card title="Formación" className="mx-auto timeline">
        <div className="">
          <div className="outer">
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={index} 
                title={item.title} 
                text={item.text} 
                isEven={index % 2 === 1} 
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Timeline;
