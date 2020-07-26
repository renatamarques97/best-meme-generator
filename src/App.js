import React from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator';
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
      </Helmet>
      <header className="App-header">
        <h1>Best Meme Generator</h1>
        <MemeGenerator />
      </header>
      <p>Best Meme Generator is a open-source project created to be
        a minimalist, fastest and easiest way to create your own custom memes,
        choosing your image and adding text over and below an image.</p>
    </div>
  );
}

export default App;
