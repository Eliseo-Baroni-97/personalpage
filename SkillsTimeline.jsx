import React from "react";
import Card from "./Card";
import "./SkillsTimeline.css";

const SkillsTimeline = () => {
  return (
    <Card title="Formación">
      <div className="container p-4">
        <div className="row align-items-center how-it-works d-flex">
          <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">2014</div>
          </div>
          <div className="col-6">
            <h4>Reparador de Pc intermedio</h4>
            <p>U.T.N.</p>
            <p>Enseñanza sobre mantenimiento y reparación de Pc.</p>
          </div>
        </div>
        <div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner left-bottom"></div>
          </div>
        </div>
        <div className="row align-items-center justify-content-end how-it-works d-flex">
          <div className="col-6 text-right">
            <h4>Técnico en informática profesional y personal</h4>
            <p>Escuela Técnica N°5</p>
            <p>Formación en conocimientos técnicos e informáticos.</p>
          </div>
          <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">2015</div>
          </div>
        </div>
        <div className="row timeline">
          <div className="col-2">
            <div className="corner right-bottom"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner top-left"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SkillsTimeline;