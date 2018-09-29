import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import '../styles/Account.css';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Avatar">
        <Avatar alt="Daniel Cross" className="avatar">
          DC
        </Avatar>
      </div>
    );
  }
}

export default Account;
