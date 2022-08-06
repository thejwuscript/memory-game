import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardIds, setCardIds] = useState([]);

  function handleClick(id, name) {
    if (!cardIds.includes(id) && cardIds.length === 20) {
      alert("You've got all of them! Congrats!");
      setCardIds([]);
      setBestScore(21);
      setScore(0);
    } else if (cardIds.includes(id)) {
      alert(`You've clicked ${name} twice! Score will be reset to 0.`);
      setCardIds([]);
      if (score > bestScore) setBestScore(score);
      setScore(0);
    } else {
      setScore(score + 1);
      cardIds.push(id);
    }
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Main onCardClick={handleClick} />
    </>
  );
}

export default App;
