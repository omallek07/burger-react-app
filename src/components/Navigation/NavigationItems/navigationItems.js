import React from 'react';
import classes from './navigationItems.css';
import NavigationItem from './NavigationItem/navigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem exact link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    <NavigationItem link="/auth">Authenticate</NavigationItem>
  </ul>
);

export default navigationItems;
