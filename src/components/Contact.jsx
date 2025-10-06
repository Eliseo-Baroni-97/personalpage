
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("myyoawve");

  if (state.succeeded) {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Card className="p-5 bg-white rounded shadow mb-5 cardcustom text-center">
                <p className="text-success">{t("thanksForJoining")}</p>
            </Card>
        </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="p-5 bg-white rounded shadow mb-5 cardcustom">
        <p>{t("description2")}</p>
        <form 
          id="contactForm"
          onSubmit={handleSubmit}
          className="mt-4"
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
            <ValidationError 
              prefix={t("email")} 
              field="email"
              errors={state.errors}
              className="text-danger"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="message" className="form-label visually-hidden">{t("message")}</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder={t("message")}
              rows="5"
              required
            />
            <ValidationError 
              prefix={t("message")} 
              field="message"
              errors={state.errors}
              className="text-danger"
            />
          </div>
          
          <div className="row justify-content-center mt-4">
            <button 
              id="btnEnviar"
              type="submit" 
              className="btn btn-outline-success btn-lg"
              disabled={state.submitting}
            >
              {state.submitting ? t("sending") : t("send")}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Contact;
