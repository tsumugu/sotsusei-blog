import React from "react";
import "./TamabiMap.css";
import { FaMapMarker } from "react-icons/fa";

const TamabiMap = ({ place }) => {
  return (
    <div className="map-wrapper">
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1P4E-AcbiUfkGL585h7fAkSMZOGzMafA&ehbc=2E312F&z=17"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default TamabiMap;
