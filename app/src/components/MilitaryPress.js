import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/MilitaryPress.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

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

    const CustomTableCell = withStyles(theme => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
      },
      body: {
        fontSize: 14
      }
    }))(TableCell);

    let id = 0;
    function createData(weight, rep) {
      id += 1;
      return { id, weight, rep };
    }

    const rows = [
      createData('Weight 1', 5),
      createData('Weight 2', 5),
      createData('Weight 3', 5),
      createData('Weight 4', 5),
      createData('Weight 5', 5),
      createData('Weight 6', 5)
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
              {workouts.map(workout => (
                <div className="session">
                  <Table className="table">
                    <TableHead>
                      <TableRow>
                        <CustomTableCell>Weight (kg)</CustomTableCell>
                        <CustomTableCell numeric>Reps</CustomTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => {
                        return (
                          <TableRow className="table-row" key={row.id}>
                            <CustomTableCell component="th" scope="row">
                              {row.weight}
                            </CustomTableCell>
                            <CustomTableCell numeric>{row.rep}</CustomTableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                  <h2 className="session-title">{workout.name}</h2>
                  Reps: {workout.reps[0]}
                  <br /> Reps: {workout.reps[1]}
                  <br /> Reps: {workout.reps[2]}
                  <br /> Reps: {workout.reps[3]}
                  <br /> Reps: {workout.reps[4]}
                  <br /> Reps: {workout.reps[5]}
                </div>
              ))}
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
