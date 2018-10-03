import React, { Component } from 'react';

class BenchPress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="BenchPress">
        <div className="tag">
          <h2>Welcome {this.props.user.firstName}</h2>
          <h4>BenchPress</h4>
        </div>
      </div>
    );
  }
}

export default BenchPress;
