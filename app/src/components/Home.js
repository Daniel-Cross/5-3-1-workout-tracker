import React from 'react';
import Logout from './Logout';
import '../styles/Home.css';
import Footer from './Footer';
import Account from './Account';
import Exercise from './Exercise';

const Home = props => {
  return (
    <div className="Home">
      <Logout />
      <Account />
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

export default Home;
