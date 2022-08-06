import React from 'react';
import Logo from './Logo';
import '../styles/header.css';
import Scoreboard from './Scoreboard'; 

function Header() {
  return (
    <header>
      <Logo />
      <Scoreboard />
    </header>
  )
}

export default Header;
