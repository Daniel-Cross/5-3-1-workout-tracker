import React from 'react';

class WorkoutTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="WorkoutTab">
        <div className="header">
          <h1 className="exercise-name">Military Press</h1>
        </div>
      </div>
    );
  }
}

export default WorkoutTab;
