import React from "react";
import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}`}
        alt="monster"
        width="180"
        height="180"
      />
      <h3>{props.monster.name}</h3>
      <p>{props.monster.email}</p>
    </div>
  );
};
