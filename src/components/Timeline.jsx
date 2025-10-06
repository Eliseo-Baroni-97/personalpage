import React from "react";
import { useTranslation } from "react-i18next";
import Card from "./Card";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

const Timeline = ({ titleKey, items, className }) => {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-center">
      <Card title={t(titleKey)} className={`p-5 mb-5 mx-0 card-custom timeline-content scroll-transparent ${className || ''}`}>
        <div className="">
          {items.map((item, index) => {
            // Construimos el texto final. Si hay fecha, la añadimos al principio.
            const dateText = item.dateKey ? `${t(item.dateKey)}. ` : '';
            const fullText = `${dateText}${t(item.textKey)}`;

            return (
              <TimelineItem 
                key={index} 
                title={t(item.titleKey)} 
                text={fullText} 
                isEven={index % 2 === 1} 
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Timeline;
