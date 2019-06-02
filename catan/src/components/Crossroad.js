import React from "react";
import "../App.css";

const Crossroad = ({ color, crossroadType }) => {
  return <div className={crossroadType} style={{ backgroundColor: color }} />;
};

export default Crossroad;
