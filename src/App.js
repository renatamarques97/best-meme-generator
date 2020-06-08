import React from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator';
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="description" content="Best Meme Generator" />
      </Helmet>
      <header className="App-header">
        <h1>Best Meme Generator</h1>
        <MemeGenerator />
      </header>
      <p>This is the minimalist, fastest and easiest way to create your own custom memes,
        choosing your image and adding text over and bellow an image.</p>
    </div>
  );
}

export default App;
