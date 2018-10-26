import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import '../styles/WeightCalc.css';
import axios from 'axios';

class WeightCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const exercises = [
      {
        title: 'Military Press',
        state: 'militaryPress'
      },
      {
        title: 'Dead Lift',
        state: 'deadLift'
      },
      {
        title: 'Bench Press',
        state: 'benchPress'
      },
      {
        title: 'Squat',
        state: 'squat'
      }
    ];

    return (
      <div className="WeightCalc">
        {exercises.map(exercise => (
          <Paper className="Exercise">
            <div className="exercise-list">
              <h2>{exercise.title}</h2>
              <TextField
                label="Estimated 1 Rep Max"
                name={exercise.state}
                type="number"
                className="workoutInput"
                margin="normal"
                value={this.props.lifts.find(
                  lift => lift.state === exercise.state
                )}
                onChange={this.props.handleInputChange}
              />
              <div className="exercise-body">
                <h4>90% Training Max:</h4>
                <p className="exercise-90">
                  {Math.round(
                    this.props.lifts.find(lift => lift.key === exercise.state)
                      .weight
                  ) * 0.9}{' '}
                  kg
                </p>
              </div>
            </div>
          </Paper>
        ))}
      </div>
    );
  }
}

export default WeightCalc;
