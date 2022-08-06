import React from "react";
import "../styles/card.css";

function Card({ name, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} height={150} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
