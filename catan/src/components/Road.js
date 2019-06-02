import React from "react";
import "../App.css";

const Road = ({ color, roadType }) => {
  return <div className={roadType} style={{ backgroundColor: color }} />;
};

export default Road;
