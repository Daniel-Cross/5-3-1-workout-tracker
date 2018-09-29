import React from 'react';
import '../styles/BenchPress.css';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const BenchPress = () => {
  return (
    <div className="BenchPress">
      <ButtonBase
        focusRipple
        key="benchPress"
        className="benchPress"
        focusVisibleClassName="Bench Press"
      >
        <Typography
          component="span"
          variant="display1"
          color="inherit"
          className="benchPress-text"
        >
          Bench Press
        </Typography>
      </ButtonBase>{' '}
    </div>
  );
};

export default BenchPress;
