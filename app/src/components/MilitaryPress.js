import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/MilitaryPress.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class MilitaryPress extends Component {
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
        reps: [5, 5, 3, 5, 5, 5]
      },
      {
        name: 'Session 2',
        reps: [5, 5, 3, 3, 3, 3]
      },
      {
        name: 'Session 3',
        reps: [5, 5, 3, 5, 3, 1]
      },
      {
        name: 'De-Load',
        reps: [5, 5, 5, 5, 5, 5]
      }
    ];

    if (this.state.value === 0) {
      return (
        <div className="MilitaryPress">
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
            <h2>Military Press</h2>
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
            <Paper className="cycle">
              <h2 className="session-title">Session 1</h2>
              Reps: 5<br /> Reps: 5<br /> Reps: 3<br /> Reps: 5<br /> Reps: 5
              <br /> Reps: 5
            </Paper>
          </div>
        </div>
      );
    } else if (this.state.value === 1) {
      return (
        <div className="MilitaryPress">
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
            <h2>Military Press</h2>
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
            <Paper className="cycle">
              Reps: 5<br /> Reps: 5<br /> Reps: 3<br /> Reps: 3<br /> Reps: 3
              <br /> Reps: 3
            </Paper>
          </div>
        </div>
      );
    } else if (this.state.value === 2) {
      return (
        <div className="MilitaryPress">
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
            <h2>Military Press</h2>
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
            <Paper className="cycle">
              Reps: 5<br /> Reps: 5<br /> Reps: 3<br /> Reps: 5<br /> Reps: 3
              <br /> Reps: 1
            </Paper>
          </div>
        </div>
      );
    } else if (this.state.value === 3) {
      return (
        <div className="MilitaryPress">
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
            <h2>Military Press</h2>
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
            <Paper className="cycle">
              Reps: 5<br /> Reps: 5<br /> Reps: 5<br /> Reps: 5<br /> Reps: 5
              <br /> Reps: 5
            </Paper>
          </div>
        </div>
      );
    } else if (this.state.value === 4) {
      return (
        <div className="MilitaryPress">
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
            <h2>Military Press</h2>
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
            <Paper className="cycle">
              Gym
              <br /> Reps: 5<br /> Reps: 3<br /> Reps: 5<br /> Reps: 5<br />{' '}
              Reps: 5
            </Paper>
          </div>
        </div>
      );
    } else {
      null;
    }
  }
}

MilitaryPress.propTypes = {
  classes: PropTypes.object.isRequired
};

export default MilitaryPress;
