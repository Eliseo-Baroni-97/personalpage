import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Card from "./Card";

const translations = {
  es: {
    fechaNacimiento: "Fecha de Nacimiento: 10/03/1997",
    dni: "DNI: 40355406",
    lugarNacimiento: "Lugar de Nacimiento: Argentina - San Miguel de Tucumán",
    telefono: "Teléfono: +54 3815123346",
  },
  en: {
    fechaNacimiento: "Date of Birth: 10/03/1997",
    dni: "DNI: 40355406",
    lugarNacimiento: "Place of Birth: Argentina - San Miguel de Tucumán",
    telefono: "Phone: +54 3815123346",
  },
};

const PersonalData = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="d-flex justify-content-center align-items-center">
      <Card>
        <ul className="list-unstyled">
          {[
            { icon: "fa-cake-candles", text: t.fechaNacimiento },
            { icon: "fa-id-card", text: t.dni },
            { icon: "fa-location-dot", text: t.lugarNacimiento },
            { icon: "fa-phone-flip", text: t.telefono },
          ].map((item, index) => (
            <li key={index} className="d-flex align-items-center mb-3">
              <i className={`fa-solid ${item.icon} mx-2 mt-2`}></i>
              <p className="font-weight-bold mb-0">{item.text}</p>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default PersonalData;
