import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleTextInputChange } from '../store/actions';
import {
  clearNewStudentInfo,
  addStudent,
  updateStudent
} from '../store/actions/studentDataActions';

class StudentInfoForm extends React.Component {
  static propTypes = {
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

  componentWillUnmount() {
    this.props.clearNewStudentInfo();
  }

  addStudent = e => {
    e.preventDefault();
    this.props.addStudent({
      name: this.props.newStudentName,
      status: this.props.newStudentStatus,
      age: this.props.newStudentAge,
      insuranceCardexpires: this.props.newStudentInsuranceExpiry,
      birthcertificate: this.props.newStudentBirthCert,
      specialneeds: this.props.newStudentSpecialNeeds,
      represenative: this.props.newStudentRepresenative,
      contactInfo: this.props.newStudentContactInfo
    });
  };

  updateStudent = e => {
    e.preventDefault();
    this.props.updateStudent({
      id: this.props.id,
      name: this.props.newStudentName,
      status: this.props.newStudentStatus,
      age: this.props.newStudentAge,
      insuranceCardexpires: this.props.newStudentInsuranceExpiry,
      birthcertificate: this.props.newStudentBirthCert,
      specialneeds: this.props.newStudentSpecialNeeds,
      represenative: this.props.newStudentRepresenative,
      contactInfo: this.props.newStudentContactInfo
    });
    this.props.toggleUpdateMode && this.props.toggleUpdateMode();
  };

  render() {
    let submitButtonText, submitButtonAction;
    switch (this.props.method) {
      case 'POST':
        submitButtonText = 'Add Student';
        submitButtonAction = this.addStudent;
        break;
      case 'PUT':
        submitButtonText = 'Update Student';
        submitButtonAction = this.updateStudent;
        break;
      default:
    }

    return (
      <form onSubmit={submitButtonAction}>
        <div>
          <label htmlFor='newStudentName'>Name</label>
          <input
            type='text'
            id='newStudentName'
            name='newStudentName'
            placeholder='Enter name'
            required
            value={this.props.newStudentName}
            onChange={this.props.handleTextInputChange}
          />
        </div>
        <div>
          <label htmlFor='newStudentStatus'>Student status</label>
          <select
            id='newStudentStatus'
            name='newStudentStatus'
            required
            value={this.props.newStudentStatus}
            onChange={this.props.handleTextInputChange}
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
            value={this.props.newStudentAge}
            onChange={this.props.handleTextInputChange}
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
            value={this.props.newStudentInsuranceExpiry}
            onChange={this.props.handleTextInputChange}
          />
        </div>
        <div>
          <label htmlFor='newStudentBirthCert'>Birth certificate</label>
          <input
            type='text'
            id='newStudentBirthCert'
            name='newStudentBirthCert'
            placeholder="Enter student's birth certificate"
            value={this.props.newStudentBirthCert}
            onChange={this.props.handleTextInputChange}
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
            value={this.props.newStudentSpecialNeeds}
            onChange={this.props.handleTextInputChange}
          />
        </div>
        <div>
          <label htmlFor='newStudentRepresenative'>
            Student's represenative
          </label>
          <input
            type='text'
            id='newStudentRepresenative'
            name='newStudentRepresenative'
            placeholder="Enter name of student's represenative"
            value={this.props.newStudentRepresenative}
            onChange={this.props.handleTextInputChange}
          />
        </div>
        <div>
          <label htmlFor='newStudentContactInfo'>Contact Info</label>
          <input
            type='text'
            id='newStudentContactInfo'
            name='newStudentContactInfo'
            placeholder="Enter student's contact information"
            value={this.props.newStudentContactInfo}
            onChange={this.props.handleTextInputChange}
          />
        </div>
        <div>
          <button type='button' onClick={this.props.clearNewStudentInfo}>
            Clear
          </button>
          {submitButtonText && <button>{submitButtonText}</button>}
        </div>
      </form>
    );
  }
}

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
