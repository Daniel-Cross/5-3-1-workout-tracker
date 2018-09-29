import React from 'react';
import '../styles/DeadLift.css';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const DeadLift = () => {
  return (
    <div className="DeadLift">
      <ButtonBase
        focusRipple
        key="deadLift"
        className="deadLift"
        focusVisibleClassName="Dead Lift"
      >
        <Typography
          component="span"
          variant="display1"
          color="inherit"
          className="deadLift-text"
        >
          Dead Lift
        </Typography>
      </ButtonBase>{' '}
    </div>
  );
};

export default DeadLift;
