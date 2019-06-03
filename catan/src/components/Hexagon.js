import React from "react";
import "../App.css";
import Road from "./Road";
import Crossroad from "./Crossroad";

const Hexagon = ({ tile }) => {
  return (
    <div>
      <div className="hex-top" style={{ borderBottomColor: tile.color }}>
        <Road
          color={tile.roadTopRight.color}
          roadType="road road-top-right"
          id={tile.id * 6 + 2}
        />
        <Road
          color={tile.roadTopLeft.color}
          roadType="road road-top-left"
          id={tile.id * 6 + 1}
        />
        <Crossroad
          color={tile.crossroadTop.color}
          crossroadType="crossroad crossroad-top"
          id={tile.id * 6 + 1}
        />
      </div>
      <div className="hex-middle" style={{ backgroundColor: tile.color }}>
        <Road
          color={tile.roadLeft.color}
          roadType="road road-left"
          id={tile.id * 6 + 6}
        />
        <Road
          color={tile.roadRight.color}
          roadType="road road-right"
          id={tile.id * 6 + 3}
        />
        <div className="dice-index">{tile.value}</div>
        <Crossroad
          color={tile.crossroadTopLeft.color}
          crossroadType="crossroad crossroad-top-left"
          id={tile.id * 6 + 6}
        />
        <Crossroad
          color={tile.crossroadTopRight.color}
          crossroadType="crossroad crossroad-top-right"
          id={tile.id * 6 + 2}
        />
        <Crossroad
          color={tile.crossroadBottomLeft.color}
          crossroadType="crossroad crossroad-bottom-left"
          id={tile.id * 6 + 5}
        />
        <Crossroad
          color={tile.crossroadBottomRight.color}
          crossroadType="crossroad crossroad-bottom-right"
          id={tile.id * 6 + 3}
        />
      </div>
      <div className="hex-bottom" style={{ borderTopColor: tile.color }}>
        <Road
          color={tile.roadBottomRight.color}
          roadType="road road-bottom-right"
          id={tile.id * 6 + 4}
        />
        <Road
          color={tile.roadBottomLeft.color}
          roadType="road road-bottom-left"
          id={tile.id * 6 + 5}
        />
        <Crossroad
          color={tile.crossroadBottom.color}
          crossroadType="crossroad crossroad-bottom"
          id={tile.id * 6 + 4}
        />
      </div>
    </div>
  );
};

export default Hexagon;
