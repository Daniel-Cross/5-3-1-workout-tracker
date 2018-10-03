import React, { Component } from 'react';

class Squat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Squat">
        <div className="tag">
          <h2>Welcome {this.props.user.firstName}</h2>
          <h4>Squat</h4>
        </div>
      </div>
    );
  }
}

export default Squat;
