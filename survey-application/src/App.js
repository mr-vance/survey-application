import React, { useState } from 'react';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleScreenChange = (screenNumber) => {
    setCurrentScreen(screenNumber);
  };

  let content;
  if (currentScreen === 1) {
    content = <Screen1 handleScreenChange={handleScreenChange} />;
  } else if (currentScreen === 2) {
    content = <Screen2 handleScreenChange={handleScreenChange} />;
  } else if (currentScreen === 3) {
    content = <Screen3 handleScreenChange={handleScreenChange} />;
  }

  return <div className="App">{content}</div>;
}

export default App;
