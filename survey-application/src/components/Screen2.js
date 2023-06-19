import React, { useState } from 'react';
import { database } from '../firebase';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';

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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateContactNumber = (contactNumber) => {
    // South African phone number format: 10 digits starting with 0
    const phoneNumberPattern = /^0\d{9}$/;
    return phoneNumberPattern.test(contactNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  
    // Clear previous errors
    setErrors({});
  
    // Form validation
    const validationErrors = {};
  
    if (!surname.trim()) {
      validationErrors.surname = 'Surname is required';
    }
  
    if (!firstNames.trim()) {
      validationErrors.firstNames = 'First Names are required';
    }
  
    if (!contactNumber.trim()) {
      validationErrors.contactNumber = 'Contact Number is required';
    } else if (!validateContactNumber(contactNumber)) {
      validationErrors.contactNumber = 'Please enter a valid South African phone number';
    }
  
    if (favoriteFoods.length === 0) {
      validationErrors.favoriteFoods = 'Please select at least one Favorite Food';
    }
  
    if (parseInt(ratings.eatOut) > 5 || parseInt(ratings.eatOut) < 1) {
      validationErrors.eatOutRating = 'Please enter a rating between 1 and 5';
    }
  
    if (parseInt(ratings.watchMovies) > 5 || parseInt(ratings.watchMovies) < 1) {
      validationErrors.moviesRating = 'Please enter a rating between 1 and 5';
    }
  
    if (parseInt(ratings.watchTV) > 5 || parseInt(ratings.watchTV) < 1) {
      validationErrors.tvRating = 'Please enter a rating between 1 and 5';
    }
  
    if (parseInt(ratings.listenToRadio) > 5 || parseInt(ratings.listenToRadio) < 1) {
      validationErrors.radioRating = 'Please enter a rating between 1 and 5';
    }
  
    if (!age || age < 5 || age > 120) {
      validationErrors.age = 'Please enter an age between 5 and 120';
    }
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }
  
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
    setIsSubmitting(false);
  
    // Return to Screen 1
    handleScreenChange(1);
  };
  

  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h2 className="display-4">Screen 2 - Survey Form</h2>
        <p className="lead">Welcome to Screen 2</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              className="form-control"
              id="surname"
              placeholder="Smith"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
            {errors.surname && <div className="error">{errors.surname}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="firstNames">First Names:</label>
            <input
              type="text"
              className="form-control"
              id="firstNames"
              placeholder="John"
              value={firstNames}
              onChange={(e) => setFirstNames(e.target.value)}
              required
            />
            {errors.firstNames && <div className="error">{errors.firstNames}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              className="form-control"
              id="contactNumber"
              placeholder="0723456789"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
            {errors.contactNumber && <div className="error">{errors.contactNumber}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
                <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <div className="error">{errors.age}</div>}
        </div>
        <div className="form-group">
            <label htmlFor="favoriteFoods">Favorite Foods. Select multiple items by holding down the Ctrl key:</label>
            <select
                multiple
                className="form-control"
                id="favoriteFoods" 
                value={favoriteFoods}
                onChange={(e) => setFavoriteFoods(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
                <option value="Pizza">Pizza</option>
                <option value="Pasta">Pasta</option>
                <option value="Pap and Wors">Pap and Wors</option>
                <option value="Chicken stir fry">Chicken stir fry</option>
                <option value="Beef stir fry">Beef stir fry</option>
                <option value="Other">Other</option>
            </select>
            {errors.favoriteFoods && <div className="error">{errors.favoriteFoods}</div>}
            </div>

          <div className="form-group">
            <label htmlFor="eatOutRating">Rate Eating Out (1-5):</label>
            <input
              type="number"
              className="form-control"
              id="eatOutRating"
              value={ratings.eatOut}
              onChange={(e) => setRatings({ ...ratings, eatOut: e.target.value })}
            />
            {errors.eatOutRating && <div className="error">{errors.eatOutRating}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="moviesRating">Rate Watching Movies (1-5):</label>
            <input
              type="number"
              className="form-control"
              id="moviesRating"
              value={ratings.watchMovies}
              onChange={(e) => setRatings({ ...ratings, watchMovies: e.target.value })}
            />
            {errors.moviesRating && <div className="error">{errors.moviesRating}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="tvRating">Rate Watching TV (1-5):</label>
            <input
              type="number"
              className="form-control"
              id="tvRating"
              value={ratings.watchTV}
              onChange={(e) => setRatings({ ...ratings, watchTV: e.target.value })}
            />
            {errors.tvRating && <div className="error">{errors.tvRating}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="radioRating">Rate Listening to Radio (1-5):</label>
            <input
              type="number"
              className="form-control"
              id="radioRating"
              value={ratings.listenToRadio}
              onChange={(e) => setRatings({ ...ratings, listenToRadio: e.target.value })}
            />
            {errors.radioRating && <div className="error">{errors.radioRating}</div>}
          </div>
          <button className="btn btn-primary" disabled={isSubmitting}>
            Submit
          </button>
          <button className="btn btn-secondary" onClick={() => handleScreenChange(1)}>Return to HomePage</button>
        </form>
      </div>
    </div>
  );
};

export default Screen2;
