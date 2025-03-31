import React from "react";
import { useTranslation } from "react-i18next"; // Usamos el hook para las traducciones
import Card from "./Card";
import "./PersonalData.css"; // Asegúrate de importar el archivo CSS

const PersonalData = () => {
  const { t } = useTranslation(); // Usamos el hook t para acceder a las traducciones

  return (
    <section className="d-flex justify-content-center align-items-center">
      {/* Aplicamos la clase personalizada .card-custom */}
      <Card className="mx-0 card-custom">
        <ul className="list-unstyled ">
          {[ 
            { icon: "fa-cake-candles", text: t("fechaNacimiento") },
            { icon: "fa-id-card", text: t("dni") },
            { icon: "fa-location-dot", text: t("lugarNacimiento") },
            { icon: "fa-phone-flip", text: t("telefono") },
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

