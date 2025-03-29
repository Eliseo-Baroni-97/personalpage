import React from "react";

const Card = ({ children, className = "", paddingClass = "p-5" }) => {
  return (
    <div className={`bg-white rounded shadow w-75 ${className} ${paddingClass}`}>
      {children}
    </div>
  );
};

export default Card;
