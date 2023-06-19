import React, { useState, useEffect } from 'react';
import { firebase, database } from '../firebase';

const Screen3 = ({ handleScreenChange }) => {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    // Fetch survey data from the database
    const surveyRef = database.ref('surveys');
    surveyRef.once('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const surveys = Object.values(data);
        setSurveyData(surveys);
      }
    });
  }, []);

  const calculateSurveyStatistics = () => {
    const totalSurveys = surveyData.length;
    const ages = surveyData.map((survey) => Number(survey.age));
    const averageAge = calculateAverage(ages);
    const oldestPerson = Math.max(...ages);
    const youngestPerson = Math.min(...ages);
    const pizzaPercentage = calculateFoodPercentage('Pizza');
    const pastaPercentage = calculateFoodPercentage('Pasta');
    const papAndWorsPercentage = calculateFoodPercentage('Pap and Wors');
    const avgRatingEatOut = calculateAverageRating('eatOut');
    const avgRatingMovies = calculateAverageRating('watchMovies');
    const avgRatingTV = calculateAverageRating('watchTV');
    const avgRatingRadio = calculateAverageRating('listenToRadio');

    return {
      totalSurveys,
      averageAge,
      oldestPerson,
      youngestPerson,
      pizzaPercentage,
      pastaPercentage,
      papAndWorsPercentage,
      avgRatingEatOut,
      avgRatingMovies,
      avgRatingTV,
      avgRatingRadio,
    };
  };

  const calculateAverage = (values) => {
    const sum = values.reduce((total, value) => total + value, 0);
    return sum / values.length;
  };

  const calculateFoodPercentage = (food) => {
    const count = surveyData.filter((survey) =>
      survey.favoriteFoods.includes(food)
    ).length;
    return ((count / surveyData.length) * 100).toFixed(2);
  };
  

  const calculateAverageRating = (category) => {
    const ratings = surveyData.map((survey) => Number(survey.ratings[category]));
    return calculateAverage(ratings).toFixed(2);
  };

  const renderSurveyStats = () => {
    if (surveyData.length === 0) {
      return <p>No survey data available</p>;
    }

    const surveyStats = calculateSurveyStatistics();

    return (
    <div className="container">
        <div className="jumbotron text-center">
            <h2 className="display-4">Survey Statistics</h2>
            <p className="lead">Welcome to Screen 3</p>
            <p>Total number of surveys: {surveyStats.totalSurveys}</p>
            <p>Average age: {surveyStats.averageAge}</p>
            <p>Oldest person who participated: {surveyStats.oldestPerson}</p>
            <p>Youngest person who participated: {surveyStats.youngestPerson}</p>
            <p>Percentage of people who like Pizza: {surveyStats.pizzaPercentage}%</p>
            <p>Percentage of people who like Pasta: {surveyStats.pastaPercentage}%</p>
            <p>Percentage of people who like Pap and Wors: {surveyStats.papAndWorsPercentage}%</p>
            <p>Average rating for "People like to eat out": {surveyStats.avgRatingEatOut}</p>
            <p>Average rating for "People like to watch movies": {surveyStats.avgRatingMovies}</p>
            <p>Average rating for "People like to watch TV": {surveyStats.avgRatingTV}</p>
            <p>Average rating for "People like to listen to the radio": {surveyStats.avgRatingRadio}</p>
        </div>
    </div>
    );
  };

  return (
    <div className="container">
      {renderSurveyStats()}
      <button className="btn btn-secondary btn-lg" onClick={() => handleScreenChange(1)}>Return to HomePage</button>
      
    </div>
  );
};

export default Screen3;
