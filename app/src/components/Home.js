import React from 'react';
import Logout from './Logout';
import WeightCalc from './WeightCalc';
import '../styles/Home.css';
import Footer from './Footer';
import Exercise from './Exercise';
import PropTypes from 'prop-types';

const Home = props => {
  return (
    <div className="Home">
      <Logout />
      {/* <Account /> */}
      <div className="tag">
        <h2>Welcome {props.user.firstName}</h2>
        <h4>Select Your Workout</h4>
      </div>
      <div className="workouts">
        <Exercise />
      </div>
      <div className="tag">
        <h2>Weight Calculator</h2>
        <p>Enter your one rep max for each exercise</p>
      </div>
      <WeightCalc />
      <Footer />
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired
};

export default Home;
