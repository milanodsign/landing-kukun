import React from "react";
import statesData from "../../lib/dataStates";

const Legend = () => {
  return (
    <div className="info">
      <span className="legend">
        <span></span>
        0$ - 100$ 
       </span>
      <span className="legend">
        <span></span>100$ - 200$
       </span>
      <span className="legend">
        <span></span>200$ - 500$
       </span>
      <span className="legend">
        <span></span>500$ - 1000$
       </span>
      <span className="legend">
        <span></span>1000$ - 2000$
       </span>
      <span className="legend">
        <span></span>2000$ - 5000$
       </span>
      <span className="legend">
        <span></span>5000$ - 10000$
       </span>
      <span className="legend">
        <span></span>10000$ +
      </span>
    </div>
  );
};

export default Legend;
