import axios from 'axios';

import {
  // General actions

  HANDLE_TEXT_INPUT_CHANGE,

  // registrationReducer actions
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,

  // loginReducer actions
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,

  // studentDataReducer actions
  FETCH_STUDENTS_START,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  CLEAR_NEW_STUDENT_INFO,
  ADD_STUDENT_START,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILURE,
  FETCH_SINGLE_STUDENT_START,
  FETCH_SINGLE_STUDENT_SUCCESS,
  FETCH_SINGLE_STUDENT_FAILURE
} from './types';

const baseURL = 'https://buildweek-be.herokuapp.com/api';

// General action definitions

export const handleTextInputChange = e => dispatch => {
  dispatch({ type: HANDLE_TEXT_INPUT_CHANGE, payload: e.currentTarget });
};

// registrationReducer action definitions

export const registerNewUser = (username, password) => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post(`${baseURL}/register`, { username, password })
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
};

// loginReducer action definitions

export const login = (username, password) => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post(`${baseURL}/login`, { username, password })
    .then(res =>
      dispatch({ type: LOGIN_SUCCESS, payload: username, other: res.data })
    )
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

export const logout = () => dispatch => dispatch({ type: LOGOUT });

// studentDataReducer action definitions

export const getStudents = () => dispatch => {
  dispatch({ type: FETCH_STUDENTS_START });
  axios
    .get(`${baseURL}/students`)
    .then(res => dispatch({ type: FETCH_STUDENTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_STUDENTS_FAILURE, payload: err }));
};

export const clearNewStudentInfo = () => dispatch =>
  dispatch({ type: CLEAR_NEW_STUDENT_INFO });

export const addStudent = newStudent => dispatch => {
  dispatch({ type: ADD_STUDENT_START });
  axios
    .post(`${baseURL}/student`, { ...newStudent })
    .then(res => dispatch({ type: ADD_STUDENT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_STUDENT_FAILURE, payload: err }));
};

export const getSingleStudent = id => dispatch => {
  dispatch({ type: FETCH_SINGLE_STUDENT_START });
  axios
    .get(`${baseURL}/students/${id}`)
    .then(res =>
      dispatch({ type: FETCH_SINGLE_STUDENT_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({ type: FETCH_SINGLE_STUDENT_FAILURE, payload: err, id })
    );
};
