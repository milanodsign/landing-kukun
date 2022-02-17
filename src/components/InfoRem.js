import React from "react";

const InfoRem = ({ dataContStates, setView }) => {
  return (
    <div className="infoRem">
      <div className="bannerTop">
        <div className="contBreadcrumbs">
          <div className="container">
            <span onClick={() => setView("map")}>Map</span>
            <span className="separator">{">"}</span>
            <span>{dataContStates.name}</span>
          </div>
          <div className="container infoBanner">
            <div className="infoTxt">
              <h1>{dataContStates.name} Kitchen Remodeling Cost</h1>
              <h3>
              Are you remodeling your Kitchen in {dataContStates.name}? Take a look at top cities and similar projects inside {dataContStates.iso}.
              </h3>
            </div>
            <div className="formSearch">
              <input type="text" placeholder="Property Adress"/>
              <input type="button" value="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoRem;
