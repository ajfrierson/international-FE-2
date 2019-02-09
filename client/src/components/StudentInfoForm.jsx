import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleTextInputChange } from '../store/actions';
import {
  clearNewStudentInfo,
  addStudent,
  updateStudent
} from '../store/actions/studentDataActions';

const StudentInfoForm = props => {
  useEffect(() => cleanup => props.clearNewStudentInfo(), []);

  const addStudent = e => {
    e.preventDefault();
    props.addStudent({
      name: props.newStudentName,
      status: props.newStudentStatus,
      age: props.newStudentAge,
      insuranceCardexpires: props.newStudentInsuranceExpiry,
      birthcertificate: props.newStudentBirthCert,
      specialneeds: props.newStudentSpecialNeeds,
      represenative: props.newStudentRepresenative,
      contactInfo: props.newStudentContactInfo
    });
  };

  const updateStudent = e => {
    e.preventDefault();
    props.updateStudent({
      id: props.id,
      name: props.newStudentName,
      status: props.newStudentStatus,
      age: props.newStudentAge,
      insuranceCardexpires: props.newStudentInsuranceExpiry,
      birthcertificate: props.newStudentBirthCert,
      specialneeds: props.newStudentSpecialNeeds,
      represenative: props.newStudentRepresenative,
      contactInfo: props.newStudentContactInfo
    });
    props.toggleUpdateMode && props.toggleUpdateMode();
    props.history.push(`/student/${props.id}/view`);
  };

  let submitButtonText, submitButtonAction;
  switch (props.method) {
    case 'POST':
      submitButtonText = 'Add Student';
      submitButtonAction = addStudent;
      break;
    case 'PUT':
      submitButtonText = 'Update Student';
      submitButtonAction = updateStudent;
      break;
    default:
  }

  return (
    <form className='student-form' onSubmit={submitButtonAction}>
      <div className='student-form__overlay' />
      <div className='student-form__field'>
        <label className='student-form__field__label' htmlFor='newStudentName'>
          Name
        </label>
        <input
          className='student-form__field__input'
          type='text'
          id='newStudentName'
          name='newStudentName'
          placeholder='Enter name'
          required
          value={props.newStudentName}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className='student-form__field'>
        <label
          className='student-form__field__label'
          htmlFor='newStudentStatus'
        >
          Student status
        </label>
        <select
          id='newStudentStatus'
          name='newStudentStatus'
          required
          value={props.newStudentStatus}
          onChange={props.handleTextInputChange}
        >
          <option disabled value=''>
            Select a student status
          </option>
          <option value='student'>Student</option>
          <option value='past student'>Past student</option>
          <option value='visitor'>Visitor</option>
        </select>
      </div>
      <div className='student-form__field'>
        <label className='student-form__field__label' htmlFor='newStudentAge'>
          Age
        </label>
        <input
          className='student-form__field__input'
          type='number'
          min='0'
          id='newStudentAge'
          name='newStudentAge'
          placeholder='Age'
          required
          value={props.newStudentAge}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className='student-form__field'>
        <label
          className='student-form__field__label'
          htmlFor='newStudentInsuranceExpiry'
        >
          Insurance expiration date
        </label>
        <input
          className='student-form__field__input'
          type='text'
          id='newStudentInsuranceExpiry'
          name='newStudentInsuranceExpiry'
          placeholder="Enter expiry date of student's insurance card"
          value={props.newStudentInsuranceExpiry}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className='student-form__field'>
        <label
          className='student-form__field__label'
          htmlFor='newStudentBirthCert'
        >
          Birth certificate
        </label>
        <input
          className='student-form__field__input'
          type='text'
          id='newStudentBirthCert'
          name='newStudentBirthCert'
          placeholder="Enter student's birth certificate"
          value={props.newStudentBirthCert}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className='student-form__field'>
        <label
          className='student-form__field__label'
          htmlFor='newStudentSpecialNeeds'
        >
          Special needs
        </label>
        <input
          className='student-form__field__input'
          type='text'
          id='newStudentSpecialNeeds'
          name='newStudentSpecialNeeds'
          placeholder='Enter special needs of student'
          required
          value={props.newStudentSpecialNeeds}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className='student-form__field'>
        <label
          className='student-form__field__label'
          htmlFor='newStudentRepresenative'
        >
          Student's represenative
        </label>
        <input
          className='student-form__field__input'
          type='text'
          id='newStudentRepresenative'
          name='newStudentRepresenative'
          placeholder="Enter name of student's represenative"
          value={props.newStudentRepresenative}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className='student-form__field'>
        <label
          className='student-form__field__label'
          htmlFor='newStudentContactInfo'
        >
          Contact Info
        </label>
        <input
          className='student-form__field__input'
          type='text'
          id='newStudentContactInfo'
          name='newStudentContactInfo'
          placeholder="Enter student's contact information"
          value={props.newStudentContactInfo}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className='student-form__buttons'>
        <button
          className='student-form__buttons__clear'
          type='button'
          onClick={props.clearNewStudentInfo}
        >
          Clear
        </button>
        {submitButtonText && (
          <button className='student-form__buttons__submit'>
            {submitButtonText}
          </button>
        )}
      </div>
    </form>
  );
};

StudentInfoForm.propTypes = {
  id: PropTypes.number,
  newStudentName: PropTypes.string.isRequired,
  newStudentStatus: PropTypes.string.isRequired,
  newStudentAge: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  newStudentInsuranceExpiry: PropTypes.string.isRequired,
  newStudentBirthCert: PropTypes.string.isRequired,
  newStudentSpecialNeeds: PropTypes.string.isRequired,
  newStudentRepresenative: PropTypes.string.isRequired,
  newStudentContactInfo: PropTypes.string.isRequired,
  handleTextInputChange: PropTypes.func.isRequired,
  clearNewStudentInfo: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  addStudent: PropTypes.func.isRequired,
  updateStudent: PropTypes.func.isRequired,
  toggleUpdateMode: PropTypes.func
};

const mapStateToProps = state => {
  return {
    newStudentName: state.studentDataReducer.newStudentName,
    newStudentStatus: state.studentDataReducer.newStudentStatus,
    newStudentAge: state.studentDataReducer.newStudentAge,
    newStudentInsuranceExpiry:
      state.studentDataReducer.newStudentInsuranceExpiry,
    newStudentBirthCert: state.studentDataReducer.newStudentBirthCert,
    newStudentSpecialNeeds: state.studentDataReducer.newStudentSpecialNeeds,
    newStudentRepresenative: state.studentDataReducer.newStudentRepresenative,
    newStudentContactInfo: state.studentDataReducer.newStudentContactInfo
  };
};

export default connect(
  mapStateToProps,
  {
    handleTextInputChange,
    clearNewStudentInfo,
    addStudent,
    updateStudent
  }
)(StudentInfoForm);
