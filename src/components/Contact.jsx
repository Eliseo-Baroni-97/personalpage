
import React, { useState, useRef } from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [status, setStatus] = useState({
    submitting: false,
    message: null,
    isError: false,
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    setStatus({ submitting: true, message: t("sending"), isError: false });

    try {
      const formData = new FormData(form);
      const subjectValue = form.elements.asunto.value.trim();
      
      formData.set('_subject', `Contacto web: ${subjectValue}`);
      formData.set('origen', window.location.href);

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({ submitting: false, message: t("messageSentSuccess"), isError: false });
        form.reset();
        setValidated(false);
      } else {
        const data = await response.json();
        const errorMessage = data.errors?.map(e => e.message).join(', ') || t("genericError");
        setStatus({ submitting: false, message: errorMessage, isError: true });
      }
    } catch (error) {
      setStatus({ submitting: false, message: t("networkError"), isError: true });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="p-5 bg-white rounded shadow mb-5 cardcustom">
        <p>{t("description2")}</p>
        <form 
          id="contactForm"
          ref={formRef}
          action="https://formspree.io/f/myyoawve" 
          method="POST" 
          noValidate
          className={`mt-4 ${validated ? 'was-validated' : ''}`}
          onSubmit={handleSubmit}
        >
          <div className="form-group mb-4">
            <label htmlFor="email" className="form-label visually-hidden">{t("email")}</label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder={t("email")}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="asunto" className="form-label visually-hidden">{t("subject")}</label>
            <input
              id="asunto"
              type="text"
              name="asunto"
              className="form-control"
              placeholder={t("subject")}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="mensaje" className="form-label visually-hidden">{t("message")}</label>
            <textarea
              id="mensaje"
              name="message"
              className="form-control"
              placeholder={t("message")}
              rows="5"
              required
            ></textarea>
          </div>
          
          {/* Honeypot field for anti-spam */}
          <input type="text" name="_gotcha" style={{display: 'none'}} tabIndex="-1" autoComplete="off" />

          <div className="row justify-content-center mt-4">
            <button 
              id="btnEnviar"
              type="submit" 
              className="btn btn-outline-success btn-lg"
              disabled={status.submitting}
            >
              {status.submitting ? t("sending") : t("send")}
            </button>
          </div>

          {status.message && (
            <p 
              id="formStatus" 
              aria-live="polite"
              className={`mt-4 text-center ${status.isError ? 'text-danger' : 'text-success'}`}
            >
              {status.message}
            </p>
          )}
        </form>
      </Card>
    </div>
  );
};

export default Contact;
