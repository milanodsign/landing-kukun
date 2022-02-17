import React from "react";

const InfoCoste = ({ dataContStates }) => {
    
  return (
    <div className="infoCoste">
      {dataContStates ? (
        <>
          <span><b>State:</b> {dataContStates.name}</span>
          <span><b>Estimated Cost:</b> {dataContStates.coste && parseInt(dataContStates.coste)}0$</span>
        </>
      ) : (
        <>
          <span><b>State:</b> </span>
          <span><b>Estimated Cost:</b> </span>
        </>
      )}
    </div>
  );
};

export default InfoCoste;
