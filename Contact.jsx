import React from "react";
import Card from "./Card"; // Usamos el componente Card para el contenedor
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de tener Bootstrap importado

const Contact = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {/* Card para el formulario de contacto */}
      <Card className="p-5 bg-white rounded shadow mb-5">
        <p>
          No dudes en ponerte en contacto conmigo completando el formulario o
          enviándome un Whatsapp.
        </p>
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
              placeholder="Email"
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control"
              name="affair"
              placeholder="Asunto"
            />
          </div>
          <div className="form-group mb-4">
            <textarea
              className="form-control"
              name="message"
              placeholder="Tu mensaje"
              rows="3"
            ></textarea>
          </div>
          <div className="row justify-content-center mt-5">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Enviar
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Contact; // Exportamos el componente correctamente
