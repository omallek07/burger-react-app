import React, { Component } from 'react';
import classes from './contact-data.css';

import Button from '../../../components/UI/Button/button';
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/spinner'


class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Max Swarz',
        address: {
          street: '123 test st',
          zipCode: '34244',
          country: 'USA'
        },
        email: 'test@gmail.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
    .then(response => {
      this.setState({ loading: false });
      this.props.history.push('/');
    })
    .catch(error => {
      this.setState({ loading: false });
    });
  }

  render () {
    let form = (
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
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
