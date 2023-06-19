import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const Screen2 = ({ handleScreenChange }) => {
  const [surname, setSurname] = useState('');
  const [firstNames, setFirstNames] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [date, setDate] = useState('');
  const [age, setAge] = useState('');
  const [favoriteFoods, setFavoriteFoods] = useState([]);
  const [ratings, setRatings] = useState({
    eatOut: '',
    watchMovies: '',
    watchTV: '',
    listenToRadio: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Save survey data to Firebase database
    const surveyData = {
      surname,
      firstNames,
      contactNumber,
      date,
      age,
      favoriteFoods,
      ratings,
    };

    firebase.database().ref('surveys').push(surveyData);

    // Reset form fields
    setSurname('');
    setFirstNames('');
    setContactNumber('');
    setDate('');
    setAge('');
    setFavoriteFoods([]);
    setRatings({
      eatOut: '',
      watchMovies: '',
      watchTV: '',
      listenToRadio: '',
    });

    // Return to Screen 1
    handleScreenChange(1);
  };

  return (
    <div>
      <h2>Screen 2 - Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>First Names:</label>
          <input
            type="text"
            value={firstNames}
            onChange={(e) => setFirstNames(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Favorite Food:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="favoriteFoods"
                value="Pizza"
                checked={favoriteFoods.includes('Pizza')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFavoriteFoods([...favoriteFoods, 'Pizza']);
                  } else {
                    setFavoriteFoods(
                      favoriteFoods.filter((food) => food !== 'Pizza')
                    );
                  }
                }}
              />
              Pizza
            </label>
            {/* Remaining food checkboxes */}
          </div>
        </div>
        {/* Rating questions */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Screen2;
