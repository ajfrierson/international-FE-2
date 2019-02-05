import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import childReducer from './childReducer';

export default combineReducers({
  loginReducer,
  childReducer
});
