import React, { Component } from 'react';
import '../styles/Navbar.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Navbar extends Component {
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
    return (
      <div className="Navbar">
        <Paper className="navbar">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            selected={true}
          >
            <Tab label="Logout" />
            <Tab label="Workouts" selected={true} />
            <Tab label="Account" />
          </Tabs>
        </Paper>
      </div>
    );
  }
}

export default Navbar;
