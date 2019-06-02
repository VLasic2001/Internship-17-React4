import React from "react";
import "../App.css";
import Road from "./Road";
import Crossroad from "./Crossroad";

const Hexagon = ({ color, value }) => {
  return (
    <div>
      <div className="hex-top" style={{ borderBottomColor: color }}>
        <Road color="black" roadType="road road-top-right" />
        <Road color="black" roadType="road road-top-left" />
        <Crossroad color="gray" crossroadType="crossroad crossroad-top" />
      </div>
      <div className="hex-middle" style={{ backgroundColor: color }}>
        <Road color="black" roadType="road road-left" />
        <Road color="black" roadType="road road-right" />
        <div className="dice-index">{value}</div>
        <Crossroad color="gray" crossroadType="crossroad crossroad-top-left" />
        <Crossroad color="gray" crossroadType="crossroad crossroad-top-right" />
        <Crossroad
          color="gray"
          crossroadType="crossroad crossroad-bottom-left"
        />
        <Crossroad
          color="gray"
          crossroadType="crossroad crossroad-bottom-right"
        />
      </div>
      <div className="hex-bottom" style={{ borderTopColor: color }}>
        <Road color="black" roadType="road road-bottom-right" />
        <Road color="black" roadType="road road-bottom-left" />
        <Crossroad color="gray" crossroadType="crossroad crossroad-bottom" />
      </div>
    </div>
  );
};

export default Hexagon;
