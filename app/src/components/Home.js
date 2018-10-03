import React, { Component } from 'react';
import Logout from './Logout';
import WeightCalc from './WeightCalc';
import '../styles/Home.css';
import Footer from './Footer';
import Exercise from './Exercise';
import PropTypes from 'prop-types';
import SaveButton from './SaveButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weightMetric: 'kg'
    };
  }

  handleChange = e => {
    const { value } = e.target;

    this.setState({ [this.state.weightMetric]: value });
  };

  render() {
    return (
      <div className="Home">
        <Logout />
        {/* <Account /> */}
        <div className="tag">
          <h2>Welcome {this.props.user.firstName}</h2>
          <h4>Select Your Workout</h4>
        </div>
        <div className="workouts">
          <Exercise />
        </div>
        <div className="tag">
          <h2>Weight Calculator</h2>
          <p>Enter your one rep max for each exercise</p>
        </div>
        {/* <Paper className="weight-select">
          <FormControl>
            <InputLabel htmlFor="age-simple">Weight</InputLabel>
            <Select
              value={this.state.weightMetric}
              onChange={this.handleChange}
              inputProps={{
                name: 'Metric',
                id: 'metric'
              }}
            >
              <MenuItem value="kg">
                <em>kg</em>
              </MenuItem>
              <MenuItem value="lbs">lbs</MenuItem>
            </Select>
          </FormControl>
        </Paper> */}
        <WeightCalc />
        <SaveButton />
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired
};

export default Home;
