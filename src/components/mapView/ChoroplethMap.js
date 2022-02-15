import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import statesData from "../../lib/dataStates";
import Legend from "./Legend";

const ChoroplethMap = () => {
  const mapURL =
    "https://api.mapbox.com/styles/v1/lmilano85/ckznnla6o001d14rzxl8enp90.html?title=view&access_token=pk.eyJ1IjoibG1pbGFubzg1IiwiYSI6ImNrem16cjhpazF4dzMyb3M4YWRrcHpkeTkifQ.k4gzZiLKpptR6sX3vgONog&zoomwheel=true&fresh=true#12/48.8665/2.3176";

  const highlightFeature = (e) => {
    var layer = e.target;

    layer.setStyle({
      weight: 3,
      color: "#666",
      fillOpacity: 0.7,
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  const zoomToFeature = (e, feature) => {
    // fitBounds(e.target.getBounds());
    console.log(feature)
  };

  const resetHighlight = (e) => {
    var layer = e.target;
    layer.setStyle({
      weight: 2,
      color: "#fff",
      fillOpacity: 0.7,
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  };

  const style = (feature) => {
    return {
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
      fillColor: getColor(feature.properties.density),
    };
  };

  const getColor = (d) => {
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
      </MapContainer>
    </div>
  );
};

export default ChoroplethMap;
