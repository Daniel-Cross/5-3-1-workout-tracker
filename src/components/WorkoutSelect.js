import React from 'react';
import MilitaryPress from './MilitaryPress';
import BenchPress from './BenchPress';
import Squat from './Squat';
import DeadLift from './DeadLift';
import Navbar from './Navbar';
import '../styles/WorkoutSelect.css';

const WorkoutSelect = () => {
  return (
    <div className="WorkoutSelect">
      <h1 className="tag">Select Your Workout</h1>
      <div className="workouts">
        <MilitaryPress />
        <DeadLift />
        <BenchPress />
        <Squat />
      </div>
    </div>
  );
};

export default WorkoutSelect;
