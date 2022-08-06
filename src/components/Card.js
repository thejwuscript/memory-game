import React from "react";
import "../styles/card.css";

function Card({ name, image, handleClick }) {
  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={name} height={150} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
