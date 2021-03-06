import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0); // [0, f]
  const [message, setMessage] = useState('Welcome!');

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h2>{score}</h2>
        <button onClick={() => setScore(prevScore => prevScore + 1)} >Increase Score </button>
        <button onClick={() => setScore(score - 1)} >Decrease Score </button>
        <button onClick={() => setScore(0)}>Reset Score</button>
      </header>
    </div>
  );
}

export default App;
