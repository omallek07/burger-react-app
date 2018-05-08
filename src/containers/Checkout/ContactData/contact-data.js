import React, { Component } from 'react';

import classes from './contact-data.css';
import Button from '../../../components/UI/Button/button';
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/spinner';
import Input from '../../../components/UI/Input/input';



class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street Address'
        },
        value: '',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
      },
      email: {
        elementType: 'input',
          elementConfig: {
          type: 'email',
          placeholder: 'Your E-mail'
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
          elementConfig: {
            options: [
              {
              value: 'fastest',
              display: 'Fastest' },
              {
              value: 'cheapest',
              display: 'Cheapest'
              }
            ]
        },
        value: '',
      }
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
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
        <Input
          elementType="input"
          elementConfig="..."
          value="..."
           />
        <Input
          elementType="input"
          type="email"
          name="email"
          placeholder="Your email" />
        <Input
          elementType="input"
          type="text"
          name="street"
          placeholder="Street address" />
        <Input
          elementType="input"
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
