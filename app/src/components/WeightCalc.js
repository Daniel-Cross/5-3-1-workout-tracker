import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class WeightCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      militaryPress: '',
      deadLift: '',
      benchPress: '',
      squat: ''
    };
  }

  handleInputChange(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="WeightCalc">
        <h1>Weight Calculator</h1>
        <div className="exercise-list">
          <div className="military-press">
            <h4>Military Press</h4>
            <p className="1rm">Estimated 1 Rep Max:</p>
            <TextField
              label="Military Press"
              name="militaryPress"
              type="number"
              className="militaryPress-input"
              margin="normal"
              variant="outlined"
              value={this.state.militaryPress}
              onChange={this.handleInputChange}
            />
            <p className="military-press-90">
              {this.state.militaryPress * 0.9}
            </p>
          </div>
          <div className="dead-lift">
            <h4>Dead Lift</h4>
            <p className="1rm">Estimated 1 Rep Max:</p>
            <TextField
              label="Dead Lift"
              name="deadLift"
              type="number"
              className="deadLift-input"
              margin="normal"
              variant="outlined"
              value={this.state.deadLift}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="bench-press">
            <h4>Bench Press</h4>
            <p className="1rm">Estimated 1 Rep Max:</p>
            <TextField
              label="Bench Press"
              name="benchPress"
              type="number"
              className="benchPress-input"
              margin="normal"
              variant="outlined"
              value={this.state.benchPress}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="squat">
            <h4>Squat</h4>
            <p className="1rm">Estimated 1 Rep Max:</p>
            <TextField
              label="Squat"
              name="squat"
              type="number"
              className="squat-input"
              margin="normal"
              variant="outlined"
              value={this.state.squat}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WeightCalc;
