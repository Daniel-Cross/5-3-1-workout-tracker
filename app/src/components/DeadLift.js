import React, { Component } from 'react';

class DeadLift extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="DeadLift">
        <div className="tag">
          <h2>Welcome {this.props.user.firstName}</h2>
          <h4>Dead Lift</h4>
        </div>
      </div>
    );
  }
}

export default DeadLift;
