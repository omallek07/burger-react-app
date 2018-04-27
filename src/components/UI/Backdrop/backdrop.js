import React from 'react';
import classes from './backdrop.css'

const backdrop = (props) => (
  props.show &&
    <div
      className={classes.Backdrop}
      onClick={props.clicked}>
    </div>
);

export default backdrop;
