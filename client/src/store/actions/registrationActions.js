import axios from 'axios';

import {
  CLEAR_REGISTRATION_INPUTS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from './types';

import { baseURL } from '.';

export const clearRegistrationInputs = () => dispatch =>
  dispatch({ type: CLEAR_REGISTRATION_INPUTS });

export const registerNewUser = (username, password) => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post(`${baseURL}/register`, { username, password })
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
};
