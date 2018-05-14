import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingName) => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: ingName
  }
}

export const removeIngredient = (ingName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: ingName
  }
}

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients
  };
}

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  }
}

export const initIngredients = () => {
  return dispatch => {
    axios.get('https://react-burger-app-4abd8.firebaseio.com/ingredients.json')
    .then(response => {
      dispatch(setIngredients(response.data))
    })
    .catch(error => {
      dispatch(fetchIngredientsFailed())
    });
  };
}
