import axios from 'axios';

import {
  HANDLE_TEXT_INPUT_CHANGE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './types';

const baseURL = 'http://localhost:5000';

export const handleTextInputChange = e => dispatch => {
  dispatch({ type: HANDLE_TEXT_INPUT_CHANGE, payload: e.currentTarget });
};

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
