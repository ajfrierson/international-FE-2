import {
  HANDLE_TEXT_INPUT_CHANGE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/types';

let initialState = {
  loggedInUser: localStorage.getItem('loggedInUser') || null,
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
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: null
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('loggedInUser', action.payload);
      console.log(action.other);
      return {
        ...state,
        loggedInUser: action.payload,
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
      localStorage.setItem('loggedInUser', null);
      return {
        ...state,
        loggedInUser: null
      };
    default:
      return state;
  }
};

export default loginReducer;
