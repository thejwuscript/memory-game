import React from 'react';
import smashBall from '../images/smash_ball.png';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <div id="logo-container">
        <img src={smashBall} alt="Smash ball" width={50} height={50} />
        <h1>Memory Game</h1>
      </div>
      <div id="scoreboard">
        <div className="score-container current">
          Score<br />1
        </div>
        <div className="scoreboard-border"></div>
        <div className="score-container best">
          Best<br />5
        </div>
      </div>
    </header>
  )
}

export default Header;
