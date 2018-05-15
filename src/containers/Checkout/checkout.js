import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/checkout-summary'
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/contact-data';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Checkout extends Component {
  // state = {
  //   ingredients: null,
  //   price: 0
  // }

  componentWillMount () {
    this.props.onInitPurchase()
  }

  //componentWillMount() {
    // const query = new URLSearchParams(this.props.location.search);
    // const ingredients = {};
    // let price = 0;

    // for (let param of query.entries()) {
    //   if (param[0] === 'price') {
    //     price = param[1];
    //   } else {
    //     ingredients[param[0]] = +param[1];
    //   }
    // }
    // this.setState({ingredients, totalPrice: price});
  //}

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    let summary = <Redirect to='/' />
    if (this.props.ingredients) {

      const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null;

      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ingredients}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler} />
            <Route
              path={`${this.props.match.path}/contact-data`}
              component={ContactData} />
        </div>
      );
    }
    return summary;
    }
  }

  /******* CONTAINER *******/

  const mapStateToProps = state => {
    return {
      ingredients: state.burgerBuilder.ingredients,
      purchased: state.order.purchased
    }
  };

  const mapDispatch = dispatch => {
    return {
      onInitPurchase: () => dispatch( actions.purchaseInit() )
    }
  }

  export default connect(mapStateToProps, mapDispatch)(Checkout);


// render={(props) => (
//   <ContactData
//     ingredients={this.state.ingredients}
//     price={this.props.price}
//     {...props}
//   />
// )

