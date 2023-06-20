# Survey Application

The purpose of this assignment is to create a survey application that collects lifestyle preference data from users. The application can be a desktop app, web app, or mobile app placed in a public space for people to fill out the survey. The collected data will be stored in a database for analysis.

## Features

### User Interface

The user interface consists of three screens:

#### Screen 1

- Start screen with two options:
  - Fill out survey
  - View survey results
- Clicking on the first button takes the user to Screen 2.
- Clicking on the second button takes the user to Screen 3.

![Screen 1](/images/screen-1.png)

#### Screen 2

- Survey form for users to fill out:
  - Personal Details:
    - Surname
    - First Names
    - Contact number
    - Date
    - Age
  - Favorite food selection (checkboxes):
    - Pizza
    - Pasta
    - Pap and Wors
    - Chicken stir fry
    - Beef stir fry
    - Other
  - Rating questions (scale of 1 to 5):
    - I like to eat out
    - I like to watch movies
    - I like to watch TV
    - I like to listen to the radio
  - Submit button to save data to the database
- After submitting, the user is returned to Screen 1.

![Screen 2](/images/screen-2.png)

#### Screen 3

- Results screen showing survey statistics:
  - Total number of surveys
  - Average age
  - Oldest person who participated
  - Youngest person who participated
  - Percentage of people who like Pizza
  - Percentage of people who like Pasta
  - Percentage of people who like Pap and Wors
  - Average rating for "People like to eat out"
  - Average rating for "People like to watch movies"
  - Average rating for "People like to watch TV"
  - Average rating for "People like to listen to the radio"
- OK button to return to Screen 1.

![Screen 3](/images/screen-3.png)

### Calculations

The following calculations are expected:

- Total number of surveys completed (count of rows in the database).
- Average age of survey participants.
- Oldest and youngest age among survey participants.
- Percentage of people who like Pizza, Pasta, and Pap and Wors.
- Average rating for "People like to eat out."
- When the OK button is clicked, the user is returned to Screen 1.

### Optional Enhancements

If you want to challenge yourself, you can consider the following enhancements:

- Field validation:
  - Check for empty text fields before submission.
  - Age validation: Age should be between 5 and 120.
  - Rating validation: Ensure all rating questions have a selected rating.
- Styling the screens to make them modern and user-friendly.
- Using a date picker for the date field.

## Technologies Used

- ReactJS, HTML, CSS, Google Firebase, Material Design Bootstrap, Bootstrap

## Getting Started

- Clone/Download the project: `git clone https://github.com/mr-vance/survey-application.git`.
- Navigate to the project directory: `cd survey-application`.
- Install the Node Package Manager (NPM): `npm i`.
- Install react scripts: `npm i react-scripts`
- Install Firebase libraries: `npm install firebase`.
- Compile and run the app: `npm start`.
- Compile and build: `npm run build`.


## License

Apache-2.0 license
