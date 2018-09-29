import React from 'react';
import '../styles/MilitaryPress.css';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const MilitaryPress = () => {
  return (
    <div className="MilitaryPress">
      <ButtonBase
        focusRipple
        key="militaryPress"
        className="militaryPress"
        focusVisibleClassName="Military Press"
      >
        <Typography
          component="span"
          variant="display1"
          color="inherit"
          className="military-text"
        >
          Military Press
        </Typography>
      </ButtonBase>
    </div>
  );
};

export default MilitaryPress;
