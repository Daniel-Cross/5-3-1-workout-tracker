import React, { Component } from 'react';
import Logout from './Logout';
import WeightCalc from './WeightCalc';
import '../styles/Home.css';
import Footer from './Footer';
import Exercise from './Exercise';
import PropTypes from 'prop-types';
import SaveButton from './SaveButton';
import axios from 'axios';

// TODO Implement a change weight function KG => LBS
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Paper from '@material-ui/core/Paper';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weightMetric: 'kg',

      lifts: [
        {
          key: 'militaryPress',
          weight: 0
        },
        {
          key: 'deadLift',
          weight: 0
        },
        {
          key: 'benchPress',
          weight: 0
        },
        {
          key: 'squat',
          weight: 0
        }
      ],
      alertMessage: '',
      isSuccess: false,
      isError: false
    };
  }

  // handleChange = e => {
  //   const { value } = e.target;

  //   this.setState({ [this.state.weightMetric]: value });
  // };

  handleInputChange = e => {
    const { name, value } = e.target;
    const lifts = JSON.stringify(this.state.lifts);
    const liftsArray = JSON.parse(lifts);

    const liftResult = liftsArray.find(lift => lift.key === name);

    liftResult.weight = value;

    this.setState({
      lifts: liftsArray
    });
  };

  handleOnClick = () => {
    axios
      .post('http://localhost:8080/RepMax', this.state.lifts)
      .then(() =>
        this.setState({ isSuccess: true, alertMessage: 'RepMax added.' })
      )
      .catch(() => {
        this.setState({
          alertMessage: 'Server error. Please try again later',
          isError: true
        });
      });
  };

  render() {
    console.log(this.state.lifts);
    return (
      <div className="Home">
        <Logout />
        {/* <Account /> */}
        <div className="tag">
          <h2>Welcome {this.props.user.firstName}</h2>
          <h4>Select Your Workout</h4>
        </div>
        <div className="workouts">
          <Exercise lifts={this.state.lifts} />
        </div>
        <div className="tag">
          <h2>Weight Calculator</h2>
          <p>Enter your one rep max for each exercise</p>
        </div>

        {/* TODO Weight change function KG => LBS

        <Paper className="weight-select">
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

        <WeightCalc
          handleInputChange={this.handleInputChange}
          lifts={this.state.lifts}
        />
        <SaveButton
          handleOnClick={this.handleOnClick}
          lifts={this.state.lifts}
        />
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
