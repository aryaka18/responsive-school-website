import React from "react";
import "./tittle.css";
const Tittle = ({ subTitle, title }) => {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Tittle;
