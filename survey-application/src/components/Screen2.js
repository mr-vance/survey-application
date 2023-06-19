import React, { useState } from 'react';
import { firebase, database } from '../firebase';

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

    // Get the form data
    const formData = {
      surname: surname,
      firstNames: firstNames,
      contactNumber: contactNumber,
      date: date,
      age: age,
      favoriteFoods: favoriteFoods,
      ratings: ratings,
    };

    // Save the data to the database
    const surveyRef = database.ref('surveys');
    surveyRef.push(formData);

    // Reset the form fields
    setSurname('');
    setFirstNames('');
    setContactNumber('');
    setDate('');
    setAge('');


    setFavoriteFoods([]);
    setRatings({});

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
          <label>Favorite Foods:</label>
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
            <label>
              <input
                type="checkbox"
                name="favoriteFoods"
                value="Pasta"
                checked={favoriteFoods.includes('Pasta')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFavoriteFoods([...favoriteFoods, 'Pasta']);
                  } else {
                    setFavoriteFoods(
                      favoriteFoods.filter((food) => food !== 'Pasta')
                    );
                  }
                }}
              />
              Pasta
            </label>
            <label>
              <input
                type="checkbox"
                name="favoriteFoods"
                value="Pap and Wors"
                checked={favoriteFoods.includes('Pap and Wors')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFavoriteFoods([...favoriteFoods, 'Pap and Wors']);
                  } else {
                    setFavoriteFoods(
                      favoriteFoods.filter((food) => food !== 'Pap and Wors')
                    );
                  }
                }}
              />
              Pap and Wors
            </label>
            <label>
              <input
                type="checkbox"
                name="favoriteFoods"
                value="Chicken stir fry"
                checked={favoriteFoods.includes('Chicken stir fry')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFavoriteFoods([...favoriteFoods, 'Chicken stir fry']);
                  } else {
                    setFavoriteFoods(
                      favoriteFoods.filter((food) => food !== 'Chicken stir fry')
                    );
                  }
                }}
              />
              Chicken stir fry
            </label>
            <label>
              <input
                type="checkbox"
                name="favoriteFoods"
                value="Beef stir fry"
                checked={favoriteFoods.includes('Beef stir fry')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFavoriteFoods([...favoriteFoods, 'Beef stir fry']);
                  } else {
                    setFavoriteFoods(
                      favoriteFoods.filter((food) => food !== 'Beef stir fry')
                    );
                  }
                }}
              />
              Beef stir fry
            </label>
            <label>
              <input
                type="checkbox"
                name="favoriteFoods"
                value="Other"
                checked={favoriteFoods.includes('Other')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFavoriteFoods([...favoriteFoods, 'Other']);
                  } else {
                    setFavoriteFoods(
                      favoriteFoods.filter((food) => food !== 'Other')
                    );
                  }
                }}
              />
              Other
            </label>
          </div>
        </div>
        <div>
  <label>I like to eat out:</label>
  <input
    type="number"
    min="1"
    max="5"
    value={ratings.eatOut}
    onChange={(e) =>
      setRatings({ ...ratings, eatOut: e.target.value })
    }
    required
  />
</div>
<div>
  <label>I like to watch movies:</label>
  <input
    type="number"
    min="1"
    max="5"
    value={ratings.watchMovies}
    onChange={(e) =>
      setRatings({ ...ratings, watchMovies: e.target.value })
    }
    required
  />
</div>
<div>
  <label>I like to watch TV:</label>
  <input
    type="number"
    min="1"
    max="5"
    value={ratings.watchTV}
    onChange={(e) =>
      setRatings({ ...ratings, watchTV: e.target.value })
    }
    required
  />
</div>
<div>
  <label>I like to listen to the radio:</label>
  <input
    type="number"
    min="1"
    max="5"
    value={ratings.listenToRadio}
    onChange={(e) =>
      setRatings({ ...ratings, listenToRadio: e.target.value })
    }
    required
  />
</div>
        <button type="submit">Submit</button>
        <button onClick={() => handleScreenChange(1)}>Return to HomePage</button>
      </form>
    </div>
  );
};

export default Screen2;
