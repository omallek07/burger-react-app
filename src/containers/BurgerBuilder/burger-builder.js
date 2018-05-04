import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/burger';
import BuildControls from '../../components/Burger/BuildControls/build-controls';
import Modal from '../../components/UI/Modal/modal';
import OrderSummary from '../../components/Burger/OrderSummary/order-summary';
import Spinner from '../../components/UI/Spinner/spinner'
import axios from '../../axios-orders.js'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.2,
  bacon: .7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey]
    })
    .reduce((sum, el) => {
      return sum + el
    }, 0);
    this.setState({purchaseable: sum > 0})
  }

  addIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = ++oldCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = --oldCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    this.setState({ loading: true })
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
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
      this.setState({ loading: false, purchasing: false })
    })
    .catch(error => {
      this.setState({ loading: false, purchasing: false })
    });
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = <OrderSummary
      ingredients={this.state.ingredients}
      purchaseCancelled={this.purchaseCancelHandler}
      purchaseContinued={this.purchaseContinueHandler}
      price={this.state.totalPrice} />;
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder
