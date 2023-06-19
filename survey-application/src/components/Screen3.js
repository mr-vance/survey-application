import React, { useState, useEffect } from 'react';
import {database } from '../firebase';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';

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
          <table className="table">
            <tbody>
              <tr>
                <td>Total number of surveys:</td>
                <td>{surveyStats.totalSurveys}</td>
              </tr>
              <tr>
                <td>Average age:</td>
                <td>{surveyStats.averageAge}</td>
              </tr>
              <tr>
                <td>Oldest person who participated:</td>
                <td>{surveyStats.oldestPerson}</td>
              </tr>
              <tr>
                <td>Youngest person who participated:</td>
                <td>{surveyStats.youngestPerson}</td>
              </tr>
              <tr>
                <td>Percentage of people who like Pizza:</td>
                <td>{surveyStats.pizzaPercentage}%</td>
              </tr>
              <tr>
                <td>Percentage of people who like Pasta:</td>
                <td>{surveyStats.pastaPercentage}%</td>
              </tr>
              <tr>
                <td>Percentage of people who like Pap and Wors:</td>
                <td>{surveyStats.papAndWorsPercentage}%</td>
              </tr>
              <tr>
                <td>Average rating for "People like to eat out":</td>
                <td>{surveyStats.avgRatingEatOut}</td>
              </tr>
              <tr>
                <td>Average rating for "People like to watch movies":</td>
                <td>{surveyStats.avgRatingMovies}</td>
              </tr>
              <tr>
                <td>Average rating for "People like to watch TV":</td>
                <td>{surveyStats.avgRatingTV}</td>
              </tr>
              <tr>
                <td>Average rating for "People like to listen to the radio":</td>
                <td>{surveyStats.avgRatingRadio}</td>
              </tr>
            </tbody>
          </table>
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
