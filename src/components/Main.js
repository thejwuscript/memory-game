import React, { useState } from 'react';
import Card from './Card';
import '../styles/main.css';
import randomCharacters from '../Utilities/characters';

function Main() {
  const [characterList, setCharacterList] = useState(randomCharacters());

  function handleClick() {
    setCharacterList(randomCharacters());
  };
    

  return (
    <main>
      <div className="cards-container">
        {characterList.map(character => 
          <Card key={character.id} name={character.name} image={character.image} handleClick={handleClick} /> 
        )}
      </div>
    </main>
  )
};

export default Main;
