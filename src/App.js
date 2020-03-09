import React from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Best Meme Generator</h1>
        <MemeGenerator />
      </header>
    </div>
  );
}

export default App;
