import React from 'react';

const Screen2 = ({ handleScreenChange }) => {
  const handleBack = () => {
    handleScreenChange(1); // Navigate back to Screen1
  };

  return (
    <div>
      <h1>Screen 2</h1>
      {/* Add survey form JSX here */}
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Screen2;
