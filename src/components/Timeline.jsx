import React from "react";
import { useTranslation } from "react-i18next"; // Importamos el hook para las traducciones
import Card from "./Card";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

const Timeline = () => {
  const { t } = useTranslation(); // Usamos el hook t para las traducciones

  const timelineData = [
    { title: t("licenciaturaCienciasComputacion"), text: t("licenciaturaCienciasComputacionText") },
    { title: t("programadorFullStack"), text: t("programadorFullStackText") },
    { title: t("cursoInglesAdultos"), text: t("cursoInglesAdultosText") },
    { title: t("analistaProgramador"), text: t("analistaProgramadorText") },
    { title: t("ingenieriaSistemas"), text: t("ingenieriaSistemasText") },
    { title: t("tecnicoIT"), text: t("tecnicoITText") },
    { title: t("tecnicoReparacionPC"), text: t("tecnicoReparacionPCText") },
  ];

  return (
    <div className="d-flex justify-content-center">
      <Card title={t("timelineFormacion")} className="mx-0 card-custom timeline-content">
        <div className="">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index} 
              title={item.title} 
              text={item.text} 
              isEven={index % 2 === 1} 
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Timeline;
