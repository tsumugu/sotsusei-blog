import React from "react";
import "./TamabiMap.css";
import { FaMapMarker } from "react-icons/fa";

const TamabiMap = ({ place }) => {
  return (
    <div className="map-wrapper">
      {place === "東学広場 デザイン棟側" ? (
        <img src="/map_design.png" alt="東学広場 デザイン棟側" />
      ) : place === "東学広場 食堂側" ? (
        <img src="/map_shokudo.png" alt="東学広場 食堂側" />
      ) : (
        <img src="/map_textile.png" alt="東学広場 テキスタイル棟側" />
      )}
    </div>
  );
};

export default TamabiMap;
