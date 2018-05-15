import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/burger';
import BuildControls from '../../components/Burger/BuildControls/build-controls';
import axios from '../../axios-orders';
import Modal from '../../components/UI/Modal/modal';
import OrderSummary from '../../components/Burger/OrderSummary/order-summary';
import Spinner from '../../components/UI/Spinner/spinner'
import withErrorHandler from '../../hoc/withErrorHandling/withErrorHandling';
import { connect } from 'react-redux';
import * as burgerBuilderActions from '../../store/actions'


class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  }

  componentDidMount () {
   this.props.onInitIngredients()
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey]
    })
    .reduce((sum, el) => {
      return sum + el
    }, 0);
    return sum > 0;
  }

  // addIngredientHandler = (type) => {
  //   let oldCount = this.state.ingredients[type];
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   };
  //   updatedIngredients[type] = ++oldCount;
  //   const priceAddition = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  //   this.updatePurchaseState(updatedIngredients);
  // }

  // removeIngredientHandler = (type) => {
  //   let oldCount = this.state.ingredients[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   };
  //   updatedIngredients[type] = --oldCount;
  //   const priceDeduction = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceDeduction;
  //   this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  //   this.updatePurchaseState(updatedIngredients);
  // }


  purchaseContinueHandler = () => {
    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    // }
    // queryParams.push('price=' + this.state.totalPrice);
    // const queryString = queryParams.join('&')
    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: `?${queryString}`
    // });
    this.props.history.push('/checkout');
  }

  render () {
    const disabledInfo = {
      ...this.props.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchaseable={this.updatePurchaseState(this.props.ingredients)}
            price={this.props.price}
            ordered={this.purchaseHandler} />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.props.price} />
      );
    }
    // if (this.state.loading) {
    //   orderSummary = <Spinner />;
    // }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
          {burger}
      </Aux>
    );
  }
}

/********* CONTAINER *********/

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    price: state.totalPrice,
    error: state.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
