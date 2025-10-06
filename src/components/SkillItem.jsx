import React from 'react';

const SkillItem = ({ icon, name, IconComponent }) => {
  return (
    <div className="col p-3 d-flex align-items-center">
      {/* Renderiza el componente de ícono si se proporciona, de lo contrario, usa la clase de ícono */}
      {IconComponent ? <IconComponent /> : <i className={`fa ${icon} fa-2x m-2`}></i>}
      <h5 className="mb-0">{name}</h5>
    </div>
  );
};

export default SkillItem;
