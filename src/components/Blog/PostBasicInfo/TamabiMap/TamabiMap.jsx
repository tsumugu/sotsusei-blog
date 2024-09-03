import React from "react";
import "./TamabiMap.css";
import { FaMapMarker } from "react-icons/fa";

const TamabiMap = ({ place }) => {
  const pos = {
    東学広場: {
      topPer: "56%",
      leftPer: "45%",
    },
  };
  return (
    <div className="map-wrapper">
      <div
        className="pin"
        style={{ top: pos[place].topPer, left: pos[place].leftPer }}
      >
        <FaMapMarker size={38} color="red" />
        <p>{place}</p>
      </div>
      <img
        className="map"
        src="https://d3djg0dm3dsv8.cloudfront.net/bf12c64105970d933785b7b9f311ddaf26293dedda0d3d6a3b17d4140c86c409.png"
      />
      <p className="credit">
        © OpenStreetMap contributors
        <a href="https://www.openstreetmap.org/copyright">License</a>
        <a href="https://www.opendatacommons.org/licenses/odbl">Terms</a>
      </p>
    </div>
  );
};

export default TamabiMap;
