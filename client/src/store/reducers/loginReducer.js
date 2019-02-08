import {
  HANDLE_TEXT_INPUT_CHANGE,
  CLEAR_LOGIN_INPUTS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/types';

const initialState = {
  loggedInUser: localStorage.getItem('token') || null,
  loginUsername: '',
  loginPassword: '',
  isLoggingIn: false,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_TEXT_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case CLEAR_LOGIN_INPUTS:
      return {
        ...state,
        loginUsername: "",
        loginPassword: ""
      };
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: null
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      console.log(action.payload.message);
      return {
        ...state,
        loggedInUser: action.payload.token,
        isLoggingIn: false
      };
    case LOGIN_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        isLoggingIn: false,
        error: 'Login failure'
      };
    case LOGOUT:
      localStorage.setItem('token', '');
      return {
        ...state,
        loggedInUser: null
      };
    default:
      return state;
  }
};

export default loginReducer;
