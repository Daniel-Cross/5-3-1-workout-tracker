import React, { Component } from 'react';
import '../styles/SaveButton.css';
import { Button } from '@material-ui/core';

class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = {
      margin: 20
    };

    return (
      <div className="Save">
        <Button
          variant="contained"
          color="secondary"
          className="save-button"
          type="submit"
          style={style}
          onClick={this.props.handleOnClick}
        >
          Save
        </Button>
      </div>
    );
  }
}

export default SaveButton;
