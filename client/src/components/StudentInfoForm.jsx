import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  handleTextInputChange,
  clearNewStudentInfo,
  addStudent
} from '../store/actions';

const StudentInfoForm = props => {
  const addStudent = e => {
    e.preventDefault();
    props.addStudent({
      name: props.newStudentName,
      status: props.newStudentStatus,
      age: props.newStudentAge,
      insuranceCardexpires: props.newStudentInsuranceExpiry,
      birthcertificate: props.newStudentBirthCert,
      specialneeds: props.newStudentSpecialNeeds,
      represenative: props.newStudentRepresentative,
      contactInfo: props.newStudentContactInfo
    });
  };

  return (
    <form onSubmit={addStudent}>
      <div>
        <label htmlFor='newStudentName'>Name</label>
        <input
          type='text'
          id='newStudentName'
          name='newStudentName'
          placeholder='Enter name'
          required
          value={props.newStudentName}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div>
        <label htmlFor='newStudentStatus'>Student status</label>
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
      <div>
        <label htmlFor='newStudentAge'>Age</label>
        <input
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
      <div>
        <label htmlFor='newStudentInsuranceExpiry'>
          Insurance expiration date
        </label>
        <input
          type='text'
          id='newStudentInsuranceExpiry'
          name='newStudentInsuranceExpiry'
          placeholder="Enter expiry date of student's insurance card"
          value={props.newStudentInsuranceExpiry}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div>
        <label htmlFor='newStudentBirthCert'>Birth certificate</label>
        <input
          type='text'
          id='newStudentBirthCert'
          name='newStudentBirthCert'
          placeholder="Enter student's birth certificate"
          value={props.newStudentBirthCert}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div>
        <label htmlFor='newStudentSpecialNeeds'>Special needs</label>
        <input
          type='text'
          id='newStudentSpecialNeeds'
          name='newStudentSpecialNeeds'
          placeholder='Enter special needs of student'
          required
          value={props.newStudentSpecialNeeds}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div>
        <label htmlFor='newStudentRepresentative'>
          Student's representative
        </label>
        <input
          type='text'
          id='newStudentRepresentative'
          name='newStudentRepresentative'
          placeholder="Enter name of student's representative"
          value={props.newStudentRepresentative}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div>
        <label htmlFor='newStudentContactInfo'>Contact Info</label>
        <input
          type='text'
          id='newStudentContactInfo'
          name='newStudentContactInfo'
          placeholder="Enter student's contact information"
          value={props.newStudentContactInfo}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div>
        <button type='button' onClick={props.clearNewStudentInfo}>
          Clear
        </button>
        <button>Add Student</button>
      </div>
    </form>
  );
};

StudentInfoForm.propTypes = {
  newStudentName: PropTypes.string.isRequired,
  newStudentStatus: PropTypes.string.isRequired,
  newStudentAge: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  newStudentInsuranceExpiry: PropTypes.string.isRequired,
  newStudentBirthCert: PropTypes.string.isRequired,
  newStudentSpecialNeeds: PropTypes.string.isRequired,
  newStudentRepresentative: PropTypes.string.isRequired,
  newStudentContactInfo: PropTypes.string.isRequired,
  handleTextInputChange: PropTypes.func.isRequired,
  clearNewStudentInfo: PropTypes.func.isRequired,
  addStudent: PropTypes.func.isRequired
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
    newStudentRepresentative: state.studentDataReducer.newStudentRepresentative,
    newStudentContactInfo: state.studentDataReducer.newStudentContactInfo
  };
};

export default connect(
  mapStateToProps,
  {
    handleTextInputChange,
    clearNewStudentInfo,
    addStudent
  }
)(StudentInfoForm);
