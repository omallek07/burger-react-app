import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/checkout-summary'
import { Route } from 'react-router-dom';
import ContactData from './ContactData/contact-data';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ingredients});
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients} checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler} />
        <Route
          path={`${this.props.match.path}/contact-data`}
          render={() => (
            <ContactData ingredients={this.state.ingredients} />
          )
        }/>
      </div>
    );
  }
}

export default Checkout;
