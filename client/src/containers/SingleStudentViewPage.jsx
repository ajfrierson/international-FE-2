import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getSingleStudent,
  deleteStudent,
  populateFormForStudentUpdate
} from '../store/actions/studentDataActions';

import StudentInfoForm from '../components/StudentInfoForm';
import StudentFullInfoDisplay from '../components/StudentFullInfoDisplay';

const SingleStudentViewPage = props => {
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    props.getSingleStudent(props.match.params.id);
    updateMode && populateFormForStudentUpdate();
    return cleanup => () => setUpdateMode(false);
  }, [updateMode]);

  const deleteStudent = e => {
    if (
      window.confirm(
        `Are you sure you want to delete the information of student ${
          props.currentViewedStudent.name
        }?`
      )
    ) {
      props.deleteStudent(props.currentViewedStudent.id);
    }
  };

  const populateFormForStudentUpdate = () => {
    props.populateFormForStudentUpdate(props.currentViewedStudent);
  };

  const toggleUpdateMode = e => setUpdateMode(!updateMode);

  return (
    <div className='view-student-page'>
      <div className="view-student-page__header">
        <h2 className='view-student-page__header__heading'>
          {props.currentViewedStudent && props.currentViewedStudent.name}
        </h2>
        <span className="toggle-update" onClick={toggleUpdateMode}>
          {updateMode ? 'Cancel Edit' : 'Edit info'}
        </span>
      </div>
      {updateMode ? (
        <StudentInfoForm
          method='PUT'
          id={props.currentViewedStudent.id}
          toggleUpdateMode={toggleUpdateMode}
        />
      ) : (
        <StudentFullInfoDisplay
          currentViewedStudent={props.currentViewedStudent}
        />
      )}
      <div>
        {!updateMode && <button className="delete-student-button" type='button' onClick={deleteStudent}>
          Delete Student
        </button>}
      </div>
    </div>
  );
};

SingleStudentViewPage.propTypes = {
  currentViewedStudent: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    insuranceCardexpires: PropTypes.string,
    birthcertificate: PropTypes.string,
    specialneeds: PropTypes.string,
    represenative: PropTypes.string,
    contactinfo: PropTypes.string
  }),
  getSingleStudent: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired,
  populateFormForStudentUpdate: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    currentViewedStudent: state.studentDataReducer.currentViewedStudent
  };
};

export default connect(
  mapStateToProps,
  {
    getSingleStudent,
    deleteStudent,
    populateFormForStudentUpdate
  }
)(SingleStudentViewPage);
