import React from "react";
import "./BuildingCard.css";

const BuildingCard = props => (
  <div
    className="card"
    value={props.id}
    onClick={() => props.doClick(props.id)}
  >
    <div className="img-container">
      <img src={props.image} />
    </div>
  </div>
);

export default BuildingCard;
