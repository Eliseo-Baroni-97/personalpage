import React, { useState } from "react";
import Card from "./Card";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("desarrollo");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="d-flex justify-content-center">
      <Card className="p-5 bg-white rounded shadow mb-5">
        <div>
          <ul
            role="tablist"
            className="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center"
          >
            <li className="nav-item flex-sm-fill">
              <button
                onClick={() => handleTabClick("desarrollo")}
                className={`nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 ${activeTab === "desarrollo" ? "active" : ""}`}
                type="button"
                style={{
                  backgroundColor: "#fff",
                  color: activeTab === "desarrollo" ? "#39bb9d" : "#000",
                  border: "none",
                  boxShadow: "none",
                  fontSize: "1.25rem",
                  padding: "15px", /* Aumenta el padding para hacerlo más grande */
                  width: "100%", /* Hace que el botón ocupe todo el ancho del contenedor */
                }}
              >
                Desarrollo
              </button>
            </li>
            <li className="nav-item flex-sm-fill">
              <button
                onClick={() => handleTabClick("Diseño")}
                className={`nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 ${activeTab === "Diseño" ? "active" : ""}`}
                type="button"
                style={{
                  backgroundColor: "#fff",
                  color: activeTab === "Diseño" ? "#39bb9d" : "#000",
                  border: "none",
                  boxShadow: "none",
                  fontSize: "1.25rem",
                  padding: "15px", /* Aumenta el padding para hacerlo más grande */
                  width: "100%", /* Hace que el botón ocupe todo el ancho del contenedor */
                }}
              >
                Diseño
              </button>
            </li>
            <li className="nav-item flex-sm-fill">
              <button
                onClick={() => handleTabClick("Personal")}
                className={`nav-link text-uppercase font-weight-bold rounded-0 ${activeTab === "Personal" ? "active" : ""}`}
                type="button"
                style={{
                  backgroundColor: "#fff",
                  color: activeTab === "Personal" ? "#39bb9d" : "#000",
                  border: "none",
                  boxShadow: "none",
                  fontSize: "1.25rem",
                  padding: "15px", /* Aumenta el padding para hacerlo más grande */
                  width: "100%", /* Hace que el botón ocupe todo el ancho del contenedor */
                }}
              >
                Personal
              </button>
            </li>
          </ul>

          <div className="tab-content mt-4">
            <div
              id="desarrollo"
              className={`tab-pane fade ${activeTab === "desarrollo" ? "show active" : ""}`}
            >
              <div className="row row-cols-2">
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-brands fa-html5 fa-2x m-2"></i>
                  <h5 className="mb-0">HTML5</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-brands fa-css3-alt fa-2x m-2"></i>
                  <h5 className="mb-0">CSS3</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-brands fa-bootstrap fa-2x m-2"></i>
                  <h5 className="mb-0">Bootstrap 4</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-brands fa-github fa-2x m-2"></i>
                  <h5 className="mb-0">GIT</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-brands fa-js fa-2x m-2"></i>
                  <h5 className="mb-0">JavaScript</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-solid fa-laptop-code fa-2x m-2"></i>
                  <h5 className="mb-0">Localstorage</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-brands fa-java fa-2x m-2"></i>
                  <h5 className="mb-0">Java</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-brands fa-react fa-2x m-2"></i>
                  <h5 className="mb-0">React</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa fa-leaf fa-2x m-2"></i>
                  <h5 className="mb-0">MongoDB</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-solid fa-database fa-2x m-2"></i>
                  <h5 className="mb-0">MySQL</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-solid fa-shield-halved fa-2x m-2"></i>
                  <h5 className="mb-0">Ciberseguridad</h5>
                </div>
              </div>
            </div>

            <div
              id="Diseño"
              className={`tab-pane fade ${activeTab === "Diseño" ? "show active" : ""}`}
            >
              <div className="row row-cols-2">
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-solid fa-cube fa-2x m-2"></i>
                  <h5 className="mb-0">3D Builder</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa fa-paint-brush fa-2x m-2"></i>
                  <h5 className="mb-0">Adobe Photoshop</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa fa-cogs fa-2x m-2"></i>
                  <h5 className="mb-0">Autodesk Fusion 360</h5>
                </div>
              </div>
            </div>

            <div
              id="Personal"
              className={`tab-pane fade ${activeTab === "Personal" ? "show active" : ""}`}
            >
              <div className="row row-cols-2">
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-regular fa-circle-check fa-2x m-2"></i>
                  <h5 className="mb-0">Ganas de crecer</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-regular fa-circle-check fa-2x m-2"></i>
                  <h5 className="mb-0">Metodología Scrum</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-regular fa-circle-check fa-2x m-2"></i>
                  <h5 className="mb-0">Liderazgo</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-regular fa-circle-check fa-2x m-2"></i>
                  <h5 className="mb-0">Capacidad para los detalles</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-regular fa-circle-check fa-2x m-2"></i>
                  <h5 className="mb-0">Altos márgenes de responsabilidad</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-regular fa-circle-check fa-2x m-2"></i>
                  <h5 className="mb-0">Creatividad</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-regular fa-circle-check fa-2x m-2"></i>
                  <h5 className="mb-0">Manejo de herramientas digitales</h5>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <i className="fa-regular fa-circle-check fa-2x m-2"></i>
                  <h5 className="mb-0">Inglés</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Skills;
