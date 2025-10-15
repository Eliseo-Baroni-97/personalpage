import React from "react";
import { useTranslation } from "react-i18next";
import Card from "./Card";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

const Timeline = ({ titleKey, items, className, onItemClick }) => {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-center">
      <Card title={t(titleKey)} className={`p-5 mb-5 mx-0 card-custom timeline-content scroll-transparent ${className || ''}`}>
        <div className="">
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              title={t(item.titleKey)}
              subtitle={`${t(item.placeKey)} - ${t(item.dateKey)}`}
              text={t(item.textKey)}
              isEven={index % 2 === 1}
              url={item.url} // Pass the url prop
              onItemClick={onItemClick} // Pass the click handler
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Timeline;
