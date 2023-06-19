import React from 'react';
import '../styles.css'  

const Screen1 = ({ handleScreenChange }) => {
  const handleFillSurvey = () => {
    handleScreenChange(2); // Navigate to Screen2
  };

  const handleViewResults = () => {
    handleScreenChange(3); // Navigate to Screen3
  };

  return (
    <div className="container">
      <h1>Screen 1</h1>
      <button onClick={handleFillSurvey}>Fill out survey</button>
      <button onClick={handleViewResults}>View survey results</button>
    </div>
  );
};

export default Screen1;
