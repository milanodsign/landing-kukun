import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import statesData from "../../lib/dataStates";
import Legend from "./Legend";
import InfoCoste from "./InfoCoste";

const ChoroplethMap = ({ dataContStates, setDataContStates }) => {
  const mapURL =
    "https://api.mapbox.com/styles/v1/lmilano85/ckznnla6o001d14rzxl8enp90.html?title=view&access_token=pk.eyJ1IjoibG1pbGFubzg1IiwiYSI6ImNrem16cXRjNzI4eXYydXFyZXJvbXQydWkifQ.a1yeVqfop_j_ZbnOXM6WPg";

  const highlightFeature = (e) => {
    
    let layer = e.target; 

    layer.setStyle({
      weight: 1,
      fillOpacity: 0.7,
    });
    
    setDataContStates(layer.feature.properties);

    layer.setStyle({
      weight: 3,
      color: "#666",
      fillOpacity: 0.5,
    });
  };

  const openGeolocationApp = (e) => {
    let layer = e.target;
    setDataContStates(layer.feature.properties);
    window.location.href =
      "https://app.mykukun.com/estimator/kitchen-renovation-cost/" +
      layer.feature.properties.name.replace(/\s+/g, "-");
  };

  const resetHighlight = (e) => {
    var layer = e.target;
    layer.setStyle({
      weight: 2,
      color: "#fff",
      fillOpacity: 1,
    });
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: openGeolocationApp,
    });
  };

  const style = (feature) => {
    return {
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 1,
      fillColor: colorStates(feature.properties.coste),
    };
  };

  const colorStates = (d) => {
    return d > 1000
      ? "#EB2313"
      : d > 500
      ? "#FF711D"
      : d > 200
      ? "#854AF2"
      : d > 100
      ? "#EB4EA9"
      : d > 50
      ? "#122448"
      : d > 20
      ? "#2032F2"
      : d > 10
      ? "#3DADFF"
      : "#FFEDA0";
  };
  return (
    <div className="container bodyContent">
      <h2>Estimated Cost of Kitchen Remodeling by State</h2>
      <div className="container containerMap">
        <MapContainer center={[37.8, -96]} zoom={4.2}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={mapURL}
          />
          <GeoJSON
            data={statesData}
            style={style}
            onEachFeature={onEachFeature}
          />
          <Legend />
          <InfoCoste dataContStates={dataContStates} />
        </MapContainer>
      </div>
    </div>
  );
};

export default ChoroplethMap;
