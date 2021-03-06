import React from 'react';
import Burger from '../../Burger/burger'
import Button from '../../UI/Button/button'
import classes from './checkout-summary.css'

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Please Confirm Your Order!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button
        btnType="Danger"
        clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button
        btnType="Success"
        clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  )
}

export default checkoutSummary;
