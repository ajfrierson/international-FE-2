import axios from 'axios';

import {
  // General actions
  HANDLE_TEXT_INPUT_CHANGE,
  // registrationReducer actions
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
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

const baseURL = 'https://buildweek-be.herokuapp.com/api';

// General action definitions

export const handleTextInputChange = e => dispatch => {
  dispatch({ type: HANDLE_TEXT_INPUT_CHANGE, payload: e.currentTarget });
};

// registrationReducer action definitions

export const registerNewUser = (username, password) => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post(`${baseURL}/register`, { username, password })
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
};

// loginReducer action definitions

export const login = (username, password) => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post(`${baseURL}/login`, { username, password })
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: username, other: res.data }))
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
