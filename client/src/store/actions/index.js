import axios from 'axios';

import {
  // General actions
  HANDLE_TEXT_INPUT_CHANGE,
  // loginReducer actions
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  // childReducer actions
  FETCH_CHILDREN_START,
  FETCH_CHILDREN_SUCCESS,
  FETCH_CHILDREN_FAILURE
} from './types';

const baseURL = 'http://localhost:5000';

// General action definitions

export const handleTextInputChange = e => dispatch => {
  dispatch({ type: HANDLE_TEXT_INPUT_CHANGE, payload: e.currentTarget });
};

// loginReducer action definitions

export const login = (loginUsername, loginPassword) => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post(`${baseURL}/api/users/login`, {
      loginUsername,
      loginPassword
    })
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

export const logout = () => dispatch => dispatch({ type: LOGOUT });

// childReducer action definitions

export const getChildren = () => dispatch => {
  dispatch({ type: FETCH_CHILDREN_START });
  axios
    .get(`${baseURL}/api/students`)
    .then(res => dispatch({ type: FETCH_CHILDREN_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_CHILDREN_FAILURE, payload: err }));
};
