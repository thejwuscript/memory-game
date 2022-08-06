import React, { useState } from 'react';
import Card from './Card';
import '../styles/main.css';
import randomCharacters from '../Utilities/characters';

function Main({ onCardClick }) {
  const [characterList, setCharacterList] = useState(randomCharacters());

  function handleClick(id, name) {
    onCardClick(id, name);
    setCharacterList(randomCharacters());
  };
    

  return (
    <main>
      <div className="cards-container">
        {characterList.map(character => 
          <Card key={character.id} character={character} onClick={handleClick} /> 
        )}
      </div>
    </main>
  )
};

export default Main;
