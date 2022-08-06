import React from "react";

function Scoreboard({ score, bestScore }) {
  return (
    <div id="scoreboard">
      <div className="score-container current">
        Score
        <br />{score}
      </div>
      <div className="scoreboard-divider"></div>
      <div className="score-container best">
        Best
        <br />{bestScore}
      </div>
    </div>
  );
}

export default Scoreboard;
