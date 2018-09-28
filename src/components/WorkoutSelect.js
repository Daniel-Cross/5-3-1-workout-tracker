import React, { Component } from 'react';
import Logout from './Logout';
import '../styles/WorkoutSelect.css';
import Footer from './Footer';
import Account from './Account';
import Exercise from './Exercise';

class WorkoutSelect extends Component {
  state = {};
  render() {
    return (
      <div className="WorkoutSelect">
        <Logout />
        <Account />
        <h1 className="tag">Select Your Workout</h1>
        <div className="workouts">
          <Exercise />
        </div>
        <Footer />
      </div>
    );
  }
}

export default WorkoutSelect;
