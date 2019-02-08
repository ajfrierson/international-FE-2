import {
  HANDLE_TEXT_INPUT_CHANGE,
  CLEAR_REGISTRATION_INPUTS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions/types';

const initialState = {
  registrationUsername: '',
  registrationPassword: '',
  isRegisteringNewUser: false,
  error: null
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_TEXT_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case CLEAR_REGISTRATION_INPUTS:
      return {
        ...state,
        registrationUsername: "",
        registrationPassword: ""
      };
    case REGISTER_START:
      return {
        ...state,
        isRegisteringNewUser: true,
        error: null
      };
    case REGISTER_SUCCESS:
      console.log("Registration success: ", action.payload);
      return {
        ...state,
        registrationUsername: "",
        registrationPassword: "",
        isRegisteringNewUser: false
      };
    case REGISTER_FAILURE:
      console.log("Registration error: ", action.payload);
      return {
        ...state,
        isRegisteringNewUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default registrationReducer;
