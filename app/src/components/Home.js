import React from 'react';
import Logout from './Logout';
import WeightCalc from './WeightCalc';
import '../styles/Home.css';
import Footer from './Footer';
import Account from './Account';
import Exercise from './Exercise';
import PropTypes from 'prop-types';

const Home = props => {
  return (
    <div className="Home">
      <Logout />
      <Account />
      <WeightCalc />
      <div className="tag">
        <h1>Welcome {props.user.firstName}</h1>
        <h2>Select Your Workout</h2>
      </div>
      <div className="workouts">
        <Exercise />
      </div>
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
