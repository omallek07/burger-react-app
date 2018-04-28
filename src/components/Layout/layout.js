import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/toolbar'
import SideDrawer from '../Navigation/SideDrawer/sidedrawer'

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content} >
      {props.children}
    </main>
  </Aux>
)

export default layout;
