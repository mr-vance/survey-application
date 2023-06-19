import React, { useState } from 'react';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleScreenChange = (screenNumber) => {
    setCurrentScreen(screenNumber);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <Screen1 />;
      case 2:
        return <Screen2 />;
      case 3:
        return <Screen3 />;
      default:
        return <Screen1 />;
    }
  };

  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}

export default App;
