import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0); // [0, f]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome!</h1>
      </header>
    </div>
  );
}

export default App;
