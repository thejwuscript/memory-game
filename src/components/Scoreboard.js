import React from "react";

function Scoreboard() {
  return (
    <div id="scoreboard">
      <div className="score-container current">
        Score
        <br />1
      </div>
      <div className="scoreboard-border"></div>
      <div className="score-container best">
        Best
        <br />5
      </div>
    </div>
  );
}

export default Scoreboard;
