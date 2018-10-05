import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/BenchPress.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class BenchPress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const workouts = [
      {
        name: 'Session 1',
        reps: [5, 5, 3, 5, 5, 5],
        weight: [20, 30, 40, 50, 60, 70]
      },
      {
        name: 'Session 2',
        reps: [5, 5, 3, 3, 3, 3],
        weight: [20, 30, 40, 50, 60, 70]
      },
      {
        name: 'Session 3',
        reps: [5, 5, 3, 5, 3, 1],
        weight: [20, 30, 40, 50, 60, 70]
      },
      {
        name: 'De-Load',
        reps: [5, 5, 5, 5, 5, 5],
        weight: [20, 30, 40, 50, 60, 70]
      }
    ];

    if (this.state.value === 0) {
      return (
        <div className="BenchPress">
          <div className="home-button">
            <Link to="/" className="back-link">
              <Button
                variant="extendedFab"
                aria-label="Delete"
                className="back-button"
                color="secondary"
              >
                Home
              </Button>
            </Link>
          </div>
          <div className="tag">
            <h2>Bench Press</h2>
          </div>
          <Paper className="workout-cycle-tabs">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="secondary"
              textColor="secondary"
              centered
            >
              <Tab label="Cycle One" />
              <Tab label="Cycle Two" />
              <Tab label="Cycle Three" />
              <Tab label="Cycle Four" />
              <Tab label="Cycle Five" />
            </Tabs>
          </Paper>

          <div className="cycle-container">
            {workouts.map(workout => (
              <Paper className="cycle">
                <div className="session">
                  <h2 className="session-title">{workout.name}</h2>
                  <div className="routine">
                    <div className="weights">
                      <span className="weight-title">Weight (kg):</span>
                      <br />
                      <br />
                      {workout.weight[0]}
                      <br /> {workout.weight[1]}
                      <br /> {workout.weight[2]}
                      <br /> {workout.weight[3]}
                      <br /> {workout.weight[4]}
                      <br /> {workout.weight[5]}
                    </div>
                    <div className="reps">
                      <span className="weight-title">Reps:</span>
                      <br />
                      <br />
                      {workout.reps[0]}
                      <br /> {workout.reps[1]}
                      <br /> {workout.reps[2]}
                      <br /> {workout.reps[3]}
                      <br /> {workout.reps[4]}
                      <br /> {workout.reps[5]}
                    </div>
                  </div>
                </div>
              </Paper>
            ))}
          </div>
        </div>
      );
    } else if (this.state.value === 1) {
      return (
        <div className="BenchPress">
          <div className="home-button">
            <Link to="/" className="back-link">
              <Button
                variant="extendedFab"
                aria-label="Delete"
                className="back-button"
                color="secondary"
              >
                Home
              </Button>
            </Link>
          </div>
          <div className="tag">
            <h2>Bench Press</h2>
          </div>
          <Paper className="workout-cycle-tabs">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="secondary"
              textColor="secondary"
              centered
            >
              <Tab label="Cycle One" />
              <Tab label="Cycle Two" />
              <Tab label="Cycle Three" />
              <Tab label="Cycle Four" />
              <Tab label="Cycle Five" />
            </Tabs>
          </Paper>

          <div className="cycle-container">
            {workouts.map(workout => (
              <Paper className="cycle">
                <div className="session">
                  <h2 className="session-title">{workout.name}</h2>
                  <div className="routine">
                    <div className="weights">
                      <span className="weight-title">Weight (kg):</span>
                      <br />
                      <br />
                      {workout.weight[0]}
                      <br /> {workout.weight[1]}
                      <br /> {workout.weight[2]}
                      <br /> {workout.weight[3]}
                      <br /> {workout.weight[4]}
                      <br /> {workout.weight[5]}
                    </div>
                    <div className="reps">
                      <span className="weight-title">Reps:</span>
                      <br />
                      <br />
                      {workout.reps[0]}
                      <br /> {workout.reps[1]}
                      <br /> {workout.reps[2]}
                      <br /> {workout.reps[3]}
                      <br /> {workout.reps[4]}
                      <br /> {workout.reps[5]}
                    </div>
                  </div>
                </div>
              </Paper>
            ))}
          </div>
        </div>
      );
    } else if (this.state.value === 2) {
      return (
        <div className="BenchPress">
          <div className="home-button">
            <Link to="/" className="back-link">
              <Button
                variant="extendedFab"
                aria-label="Delete"
                className="back-button"
                color="secondary"
              >
                Home
              </Button>
            </Link>
          </div>
          <div className="tag">
            <h2>Bench Press</h2>
          </div>
          <Paper className="workout-cycle-tabs">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="secondary"
              textColor="secondary"
              centered
            >
              <Tab label="Cycle One" />
              <Tab label="Cycle Two" />
              <Tab label="Cycle Three" />
              <Tab label="Cycle Four" />
              <Tab label="Cycle Five" />
            </Tabs>
          </Paper>

          <div className="cycle-container">
            {workouts.map(workout => (
              <Paper className="cycle">
                <div className="session">
                  <h2 className="session-title">{workout.name}</h2>
                  <div className="routine">
                    <div className="weights">
                      <span className="weight-title">Weight (kg):</span>
                      <br />
                      <br />
                      {workout.weight[0]}
                      <br /> {workout.weight[1]}
                      <br /> {workout.weight[2]}
                      <br /> {workout.weight[3]}
                      <br /> {workout.weight[4]}
                      <br /> {workout.weight[5]}
                    </div>
                    <div className="reps">
                      <span className="weight-title">Reps:</span>
                      <br />
                      <br />
                      {workout.reps[0]}
                      <br /> {workout.reps[1]}
                      <br /> {workout.reps[2]}
                      <br /> {workout.reps[3]}
                      <br /> {workout.reps[4]}
                      <br /> {workout.reps[5]}
                    </div>
                  </div>
                </div>
              </Paper>
            ))}
          </div>
        </div>
      );
    } else if (this.state.value === 3) {
      return (
        <div className="BenchPress">
          <div className="home-button">
            <Link to="/" className="back-link">
              <Button
                variant="extendedFab"
                aria-label="Delete"
                className="back-button"
                color="secondary"
              >
                Home
              </Button>
            </Link>
          </div>
          <div className="tag">
            <h2>Bench Press</h2>
          </div>
          <Paper className="workout-cycle-tabs">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="secondary"
              textColor="secondary"
              centered
            >
              <Tab label="Cycle One" />
              <Tab label="Cycle Two" />
              <Tab label="Cycle Three" />
              <Tab label="Cycle Four" />
              <Tab label="Cycle Five" />
            </Tabs>
          </Paper>

          <div className="cycle-container">
            {workouts.map(workout => (
              <Paper className="cycle">
                <div className="session">
                  <h2 className="session-title">{workout.name}</h2>
                  <div className="routine">
                    <div className="weights">
                      <span className="weight-title">Weight (kg):</span>
                      <br />
                      <br />
                      {workout.weight[0]}
                      <br /> {workout.weight[1]}
                      <br /> {workout.weight[2]}
                      <br /> {workout.weight[3]}
                      <br /> {workout.weight[4]}
                      <br /> {workout.weight[5]}
                    </div>
                    <div className="reps">
                      <span className="weight-title">Reps:</span>
                      <br />
                      <br />
                      {workout.reps[0]}
                      <br /> {workout.reps[1]}
                      <br /> {workout.reps[2]}
                      <br /> {workout.reps[3]}
                      <br /> {workout.reps[4]}
                      <br /> {workout.reps[5]}
                    </div>
                  </div>
                </div>
              </Paper>
            ))}
          </div>
        </div>
      );
    } else if (this.state.value === 4) {
      return (
        <div className="BenchPress">
          <div className="home-button">
            <Link to="/" className="back-link">
              <Button
                variant="extendedFab"
                aria-label="Delete"
                className="back-button"
                color="secondary"
              >
                Home
              </Button>
            </Link>
          </div>
          <div className="tag">
            <h2>Bench Press</h2>
          </div>
          <Paper className="workout-cycle-tabs">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="secondary"
              textColor="secondary"
              centered
            >
              <Tab label="Cycle One" />
              <Tab label="Cycle Two" />
              <Tab label="Cycle Three" />
              <Tab label="Cycle Four" />
              <Tab label="Cycle Five" />
            </Tabs>
          </Paper>

          <div className="cycle-container">
            {workouts.map(workout => (
              <Paper className="cycle">
                <div className="session">
                  <h2 className="session-title">{workout.name}</h2>
                  <div className="routine">
                    <div className="weights">
                      <span className="weight-title">Weight (kg):</span>
                      <br />
                      <br />
                      {workout.weight[0]}
                      <br /> {workout.weight[1]}
                      <br /> {workout.weight[2]}
                      <br /> {workout.weight[3]}
                      <br /> {workout.weight[4]}
                      <br /> {workout.weight[5]}
                    </div>
                    <div className="reps">
                      <span className="weight-title">Reps:</span>
                      <br />
                      <br />
                      {workout.reps[0]}
                      <br /> {workout.reps[1]}
                      <br /> {workout.reps[2]}
                      <br /> {workout.reps[3]}
                      <br /> {workout.reps[4]}
                      <br /> {workout.reps[5]}
                    </div>
                  </div>
                </div>
              </Paper>
            ))}
          </div>
        </div>
      );
    } else {
      null;
    }
  }
}

BenchPress.propTypes = {
  classes: PropTypes.object.isRequired
};

export default BenchPress;
