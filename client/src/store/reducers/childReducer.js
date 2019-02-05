import {
  HANDLE_TEXT_INPUT_CHANGE,
  FETCH_CHILDREN_START,
  FETCH_CHILDREN_SUCCESS,
  FETCH_CHILDREN_FAILURE
} from '../actions/types';

let initialState = {
  children: [],
  isFetchingChildren: false,
  error: null
};

const childReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_TEXT_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case FETCH_CHILDREN_START:
      return {
        ...state,
        isFetchingChildren: true,
        error: null
      };
    case FETCH_CHILDREN_SUCCESS:
      return {
        ...state,
        children: action.payload,
        isFetchingChildren: false
      };
    case FETCH_CHILDREN_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        isFetchingChildren: false,
        error: 'Failed to retrieve children data'
      };
    default:
      return state;
  }
};

export default childReducer;
