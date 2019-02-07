import { combineReducers } from 'redux';

import registrationReducer from './registrationReducer';
import loginReducer from './loginReducer';
import studentDataReducer from './studentDataReducer.js';

export default combineReducers({
  registrationReducer,
  loginReducer,
  studentDataReducer
});
