import React from "react";
import "../css/GalaPromotionBenefits.css";

const GalaPromotionBenefits = ({ title, text }) => {
  return (
    <div className="red-cross-column">
      <h3 className="red-cross-title">{title}</h3>
      <p className="red-cross-text">{text}</p>
    </div>
  );
};


export default GalaPromotionBenefits;
