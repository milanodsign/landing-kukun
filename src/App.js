import React from "react";
import "./css/bootstrap.css";
import "./css/App.css";
import "./css/main.css";
import TopMenu from "./components/TopMenu";
import ChoroplethMap from "./components/mapView/ChoroplethMap";

function App() {
  return (
    <div className="App">
      <TopMenu />
      <ChoroplethMap />
    </div>
  );
}

export default App;
