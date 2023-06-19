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
        <div className="jumbotron text-center">
      <h1 className="display-4">Survey Application</h1>
      <p className="lead">Welcome to Screen 1</p>
      <button className="btn btn-primary btn-lg mr-3" onClick={handleFillSurvey}>Fill out survey</button>
      <button className="btn btn-secondary btn-lg" onClick={handleViewResults}>View survey results</button>
    </div>
    </div>
  );
};

export default Screen1;
