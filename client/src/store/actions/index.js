import axios from 'axios';

import { HANDLE_TEXT_INPUT_CHANGE } from './types';

export const baseURL = 'https://buildweek-be.herokuapp.com/api';

// General action definitions

export const handleTextInputChange = e => dispatch => {
  dispatch({ type: HANDLE_TEXT_INPUT_CHANGE, payload: e.currentTarget });
};
