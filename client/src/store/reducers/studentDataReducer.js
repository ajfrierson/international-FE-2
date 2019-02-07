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
  FETCH_SINGLE_STUDENT_FAILURE,
  DELETE_STUDENT_START,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILURE,
  POPULATE_FORM_FOR_STUDENT_UPDATE,
  UPDATE_STUDENT_START,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILURE
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
  isDeletingStudent: false,
  isUpdatingStudent: false,
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
    case DELETE_STUDENT_START:
      return {
        ...state,
        isDeletingStudent: true,
        error: null
      };
    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        students: action.payload,
        isDeletingStudent: false
      };
    case DELETE_STUDENT_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        isDeletingStudent: false,
        error: `Failed to delete student with ID ${action.id}`
      };
    case POPULATE_FORM_FOR_STUDENT_UPDATE:
      return {
        ...state,
        newStudentName: action.payload.name,
        newStudentStatus: action.payload.status,
        newStudentAge: action.payload.age,
        newStudentInsuranceExpiry: action.payload.insuranceCardexpires || "",
        newStudentBirthCert: action.payload.birthcertificate || "",
        newStudentSpecialNeeds: action.payload.specialneeds,
        newStudentRepresentative: action.payload.representative,
        newStudentContactInfo: action.payload.contactinfo || ""
      };
    case UPDATE_STUDENT_START:
      return {
        ...state,
        isUpdatingStudent: true,
        error: null
      };
    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        students: action.payload.updatedStudentsList,
        currentViewedStudent: action.payload.newStudentInfo,
        isUpdatingStudent: false
      };
    case UPDATE_STUDENT_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        isUpdatingStudent: false,
        error: `Failed to update student with ID ${action.id}`
      };
    default:
      return state;
  }
};

export default studentDataReducer;
