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
      <p className="lead">Welcome to Screen 1 </p>
      <p>Our application is designed to collect valuable user lifestyle preference data. Our calculations are designed to provide you with meaningful and interesting results, including the total number of completed surveys, average age, age range, and preferences among participants. With these insights, you can discover trends and understand how your preferences compare to others.</p>

      <button className="btn btn-primary btn-lg mr-3" onClick={handleFillSurvey}>Fill out survey</button>
      <button className="btn btn-secondary btn-lg" onClick={handleViewResults}>View survey results</button>
    </div>
    </div>
  );
};

export default Screen1;
