import React, { useState } from "react";
import "./css/bootstrap.css";
import "./css/main.css";
import TopMenu from "./components/TopMenu";
import ChoroplethMap from "./components/mapView/ChoroplethMap";

function App() {
  const [dataContStates, setDataContStates] = useState([]);
  return (
    <div className="App">
      <TopMenu />
      <ChoroplethMap {...{ dataContStates, setDataContStates }} />
    </div>
  );
}

export default App;
