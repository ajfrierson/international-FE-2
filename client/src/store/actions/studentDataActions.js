import axios from 'axios';

import {
  FETCH_STUDENTS_START,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  CLEAR_NEW_STUDENT_INFO,
  ADD_STUDENT_START,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILURE,
  FETCH_SINGLE_STUDENT_START,
  FETCH_SINGLE_STUDENT_SUCCESS,
  FETCH_SINGLE_STUDENT_FAILURE,
  DELETE_STUDENT_START,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILURE,
  POPULATE_FORM_FOR_STUDENT_UPDATE,
  UPDATE_STUDENT_START,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILURE
} from './types';

import { baseURL } from '.';

const getAuthToken = () => ({
  headers: { Authorization: localStorage.getItem('token') }
});

export const getStudents = () => dispatch => {
  dispatch({ type: FETCH_STUDENTS_START });
  axios
    .get(`${baseURL}/students`, getAuthToken())
    .then(res =>
      dispatch({
        type: FETCH_STUDENTS_SUCCESS,
        payload: res.data.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        )
      })
    )
    .catch(err => dispatch({ type: FETCH_STUDENTS_FAILURE, payload: err }));
};

export const clearNewStudentInfo = () => dispatch =>
  dispatch({ type: CLEAR_NEW_STUDENT_INFO });

export const addStudent = newStudent => dispatch => {
  dispatch({ type: ADD_STUDENT_START });
  axios
    .post(`${baseURL}/student`, { ...newStudent }, getAuthToken())
    .then(res => {
      dispatch({ type: ADD_STUDENT_SUCCESS, payload: res.data });
      window.location.href = '/';
    })
    .catch(err => dispatch({ type: ADD_STUDENT_FAILURE, payload: err }));
};

export const getSingleStudent = id => dispatch => {
  dispatch({ type: FETCH_SINGLE_STUDENT_START });
  axios
    .get(`${baseURL}/students/${+id}`, getAuthToken())
    .then(res =>
      dispatch({ type: FETCH_SINGLE_STUDENT_SUCCESS, payload: res.data[0] })
    )
    .catch(err =>
      dispatch({ type: FETCH_SINGLE_STUDENT_FAILURE, payload: err, id })
    );
};

export const deleteStudent = id => dispatch => {
  dispatch({ type: DELETE_STUDENT_START });
  axios
    .delete(`${baseURL}/students/${id}`, getAuthToken())
    .then(res => {
      dispatch({ type: DELETE_STUDENT_SUCCESS, payload: res.data });
      window.location.href = '/';
    })
    .catch(err => dispatch({ type: DELETE_STUDENT_FAILURE, payload: err, id }));
};

export const populateFormForStudentUpdate = currentViewedStudent => dispatch => {
  dispatch({
    type: POPULATE_FORM_FOR_STUDENT_UPDATE,
    payload: currentViewedStudent
  });
};

export const updateStudent = newStudentInfo => dispatch => {
  const { id } = newStudentInfo.id
  dispatch({ type: UPDATE_STUDENT_START });
  axios
    .put(`${baseURL}/students/${id}`, id, getAuthToken())
    .then(res =>
      dispatch({
        type: UPDATE_STUDENT_SUCCESS,
        payload: {
          updatedStudentList: res.data,
          newStudentInfo
        }
      })
    )
    .catch(err => dispatch({ type: UPDATE_STUDENT_FAILURE, payload: err, id }));
};
