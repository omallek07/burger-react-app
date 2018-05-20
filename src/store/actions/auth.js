import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_FAIL
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAIOzMUH6yWNtFnEdQOOqP6cpExpWZ2NJU';
    if (!isSignup) {
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAIOzMUH6yWNtFnEdQOOqP6cpExpWZ2NJU';
    }
    axios.post(url, authData)
    .then(response => {
      console.log(response);
      dispatch(authSuccess(response.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(authFail());
    });
  };
};
