import React from 'react';
import Card from './Card';
import '../styles/main.css';
import characters from '../Utilities/characters';

function Main() {
  return (
    <main>
      <div className="cards-container">
        {characters().map(character => 
          <Card key={character.id} name={character.name} image={character.image} /> 
        )}
      </div>
    </main>
  )
};

export default Main;
