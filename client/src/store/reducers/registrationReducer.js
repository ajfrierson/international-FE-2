import {
  HANDLE_TEXT_INPUT_CHANGE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions/types';

let initialState = {
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
    case REGISTER_START:
      return {
        ...state,
        isRegisteringNewUser: true,
        error: null
      };
    case REGISTER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        registrationUsername: "",
        registrationPassword: "",
        isRegisteringNewUser: false
      };
    case REGISTER_FAILURE:
      console.log(action.payload);
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
