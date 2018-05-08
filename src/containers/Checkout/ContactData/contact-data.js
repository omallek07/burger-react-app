import React, { Component } from 'react';
import classes from './contact-data.css';

import Button from '../../../components/UI/Button/button';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: ''
    }
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients)
  }

  render () {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Information</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your name" />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your email" />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Street address" />
          <input
            className={classes.Input}
            type="text"
            name="zipCode"
            placeholder="Zip code" />
          <Button
            btnType="Success"
            clicked={this.orderHandler}>ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
