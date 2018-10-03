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
    const weeks = [
      {
        week: 1,
        Rep: 5
      }
    ];

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
            Reps: 5 Reps: 5 Reps: 3 Reps: 5 Reps: 5 Reps: 5
          </Paper>
        </div>
      </div>
    );
  }
}

MilitaryPress.propTypes = {
  classes: PropTypes.object.isRequired
};

export default MilitaryPress;
