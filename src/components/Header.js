import React from 'react';
import Logo from './Logo';
import '../styles/header.css';
import Scoreboard from './Scoreboard'; 

function Header({ score, bestScore }) {
  return (
    <header>
      <Logo />
      <Scoreboard score={score} bestScore={bestScore} />
    </header>
  )
}

export default Header;
