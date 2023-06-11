import React from 'react';
import './App.css';
import AnimatedText from './Components/AnimatedText';
import FancyButton from './Components/FancyButton ';

function App() {
  return (
    <div className="App">
      <div className="moving-border top"></div>
      <div className="moving-border right"></div>
      <div className="moving-border bottom"></div>
      <div className="moving-border left"></div>
      <AnimatedText />
      <FancyButton />
    </div>
  );
}

export default App;
