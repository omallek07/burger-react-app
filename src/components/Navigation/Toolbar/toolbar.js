import React from 'react';
import classes from './toolbar.css'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/navigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/drawerToggle'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
