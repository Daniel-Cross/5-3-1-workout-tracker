import React from 'react';
import '../styles/Squat.css';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const Squat = () => {
  return (
    <div className="Squat">
      <ButtonBase
        focusRipple
        key="squat"
        className="squat"
        focusVisibleClassName="Squat"
      >
        <Typography
          component="span"
          variant="display1"
          color="inherit"
          className="squat-text"
        >
          Squat
        </Typography>
      </ButtonBase>{' '}
    </div>
  );
};

export default Squat;
