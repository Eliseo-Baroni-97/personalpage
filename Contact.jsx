import React from "react";
import Card from "./Card"; // Usamos el componente Card para el contenedor
import "bootstrap/dist/css/bootstrap.min.css";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    description: "No dudes en ponerte en contacto conmigo completando el formulario o enviándome un Whatsapp.",
    email: "Email",
    subject: "Asunto",
    message: "Tu mensaje",
    send: "Enviar",
  },
  en: {
    description: "Feel free to get in touch with me by filling out the form or sending me a WhatsApp message.",
    email: "Email",
    subject: "Subject",
    message: "Your message",
    send: "Send",
  },
};

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="p-5 bg-white rounded shadow mb-5">
        <p>{t.description}</p>
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
              placeholder={t.email}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control"
              name="affair"
              placeholder={t.subject}
            />
          </div>
          <div className="form-group mb-4">
            <textarea
              className="form-control"
              name="message"
              placeholder={t.message}
              rows="3"
            ></textarea>
          </div>
          <div className="row justify-content-center mt-5">
            <button type="submit" className="btn btn-outline-success btn-lg">
              {t.send}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
