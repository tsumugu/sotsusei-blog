import React from "react";
import "./TamabiMap.css";
import { FaMapMarker } from "react-icons/fa";

const TamabiMap = ({ place }) => {
  const pos = {
    東学広場: {
      lat: "35.610389544636156",
      lon: "139.34909999370575",
    },
  };
  return (
    <div className="map-wrapper">
      <iframe
        width="100%"
        height="100%"
        src="https://www.openstreetmap.org/export/embed.html?bbox=139.3464767932892%2C35.608241602118504%2C139.35172319412234%2C35.61253742948412&amp;layer=mapnik&amp;marker=35.610389544636156%2C139.34909999370575"
      ></iframe>
    </div>
  );
};

export default TamabiMap;
