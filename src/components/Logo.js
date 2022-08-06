import React from "react";
import smashBall from '../images/smash_ball.png';

function Logo() {
  return (
    <div id="logo-container">
      <img src={smashBall} alt="Smash ball" width={50} height={50} />
      <h1>Memory Game</h1>
    </div>
  );
}

export default Logo;
