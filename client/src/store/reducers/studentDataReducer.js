import {
  HANDLE_TEXT_INPUT_CHANGE,
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
} from '../actions/types';

let initialState = {
  students: [],
  currentViewedStudent: null,
  newStudentName: '',
  newStudentStatus: '',
  newStudentAge: '',
  newStudentInsuranceExpiry: '',
  newStudentBirthCert: '',
  newStudentSpecialNeeds: '',
  newStudentRepresentative: '',
  newStudentContactInfo: '',
  isFetchingStudents: false,
  isAddingStudent: false,
  isFetchingSingleStudent: false,
  error: null
};

const studentDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_TEXT_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case FETCH_STUDENTS_START:
      return {
        ...state,
        isFetchingStudents: true,
        error: null
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
        isFetchingStudents: false
      };
    case FETCH_STUDENTS_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        isFetchingStudents: false,
        error: 'Failed to retrieve student data'
      };
    case CLEAR_NEW_STUDENT_INFO:
      return {
        ...state,
        newStudentName: '',
        newStudentStatus: '',
        newStudentAge: '',
        newStudentInsuranceExpiry: '',
        newStudentBirthCert: '',
        newStudentSpecialNeeds: '',
        newStudentRepresentative: '',
        newStudentContactInfo: ''
      };
    case ADD_STUDENT_START:
      return {
        ...state,
        isAddingStudent: true,
        error: null
      };
    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        isAddingStudent: false,
        newStudentName: '',
        newStudentStatus: '',
        newStudentAge: '',
        newStudentInsuranceExpiry: '',
        newStudentBirthCert: '',
        newStudentSpecialNeeds: '',
        newStudentRepresentative: '',
        newStudentContactInfo: ''
      };
    case ADD_STUDENT_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        isAddingStudent: false,
        error: 'Failed to add student'
      };
    case FETCH_SINGLE_STUDENT_START:
      return {
        ...state,
        isFetchingSingleStudent: true,
        error: null
      };
    case FETCH_SINGLE_STUDENT_SUCCESS:
      return {
        ...state,
        currentViewedStudent: action.payload,
        isFetchingSingleStudent: false
      };
    case FETCH_SINGLE_STUDENT_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        isFetchingSingleStudent: false,
        error: `Failed to get info of student with ID ${action.id}`
      };
    default:
      return state;
  }
};

export default studentDataReducer;
