import React from 'react';

const Screen3 = ({ handleScreenChange }) => {
  const handleBack = () => {
    handleScreenChange(1); // Navigate back to Screen1
  };

  return (
    <div>
      <h1>Screen 3</h1>
      {/* Add survey results JSX here */}
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Screen3;
