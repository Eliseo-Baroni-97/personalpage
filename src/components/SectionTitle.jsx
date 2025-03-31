import React from "react";
import { useTranslation } from "react-i18next";

const SectionTitle = ({ titleKey, icon,id}) => {
  const { t } = useTranslation();

  return (
    <div className=" d-flex align-items-center mb-2 px-sm-0 px-md-0 px-lg-5 " id={id}>
      <div className="p-1">
        <i className={`fa-solid ${icon} fa-xl`}></i>
      </div>
      <div className="p-1">
        <h4 className="fs-4 fw-bolder mb-0">{t(titleKey)}</h4>
      </div>
      <div className="flex-grow-1">
        <hr className="mb-0" />
      </div>
    </div>
  );
};

export default SectionTitle;
