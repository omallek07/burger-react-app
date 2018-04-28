import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png';
import classes from './logo.css'

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
