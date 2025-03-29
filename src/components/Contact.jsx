import React from "react";
import Card from "./Card"; // Usamos el componente Card para el contenedor
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="p-5 bg-white rounded shadow mb-5">
        <p>{t("description2")}</p>
        <form
          className="mt-4"
          action="https://formspree.io/f/myyoawve"
          method="POST"
        >
          <div className="form-group mb-4">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
              placeholder={t("email")}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control"
              name="affair"
              placeholder={t("subject")}
            />
          </div>
          <div className="form-group mb-4">
            <textarea
              className="form-control"
              name="message"
              placeholder={t("message")}
              rows="3"
            ></textarea>
          </div>
          <div className="row justify-content-center mt-5">
            <button type="submit" className="btn btn-outline-success btn-lg">
              {t("send")}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
