import React from "react";
import "../styles/card.css";

function Card({character, onClick }) {
  return (
    <div className="card" onClick={() => onClick(character.id, character.name)}>
      <img src={character.image} alt={character.name} height={150} />
      <p>{character.name}</p>
    </div>
  );
}

export default Card;
