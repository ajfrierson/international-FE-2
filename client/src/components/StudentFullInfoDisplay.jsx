import React from 'react';
import PropTypes from 'prop-types';

const StudentFullInfoDisplay = props => {
  return (
    <div className='student-view'>
      <div className='student-view__overlay' />
      <div className='student-view__field'>
        <span className='student-view__field__label'>Status: </span>
        <span className='student-view__field__value'>
          {props.currentViewedStudent && props.currentViewedStudent.status}
        </span>
      </div>
      <div className='student-view__field'>
        <span className='student-view__field__label'>Age: </span>
        <span className='student-view__field__value'>
          {props.currentViewedStudent && props.currentViewedStudent.age}
        </span>
      </div>
      <div className='student-view__field'>
        <span className='student-view__field__label'>
          Insurance card expiry date:{' '}
        </span>
        <span className='student-view__field__value'>
          {props.currentViewedStudent &&
            (props.currentViewedStudent.insuranceCardexpires || 'N/A')}
        </span>
      </div>
      <div className='student-view__field'>
        <span className='student-view__field__label'>Birth certificate: </span>
        <span className='student-view__field__value'>
          {props.currentViewedStudent &&
            (props.currentViewedStudent.birthcertificate || 'N/A')}
        </span>
      </div>
      <div className='student-view__field'>
        <span className='student-view__field__label'>Special needs: </span>
        <span className='student-view__field__value'>
          {props.currentViewedStudent &&
            props.currentViewedStudent.specialneeds}
        </span>
      </div>
      <div className='student-view__field'>
        <span className='student-view__field__label'>
          Student's represenative:{' '}
        </span>
        <span className='student-view__field__value'>
          {props.currentViewedStudent &&
            props.currentViewedStudent.represenative}
        </span>
      </div>
      <div className='student-view__field'>
        <span className='student-view__field__label'>
          Contact information:{' '}
        </span>
        <span className='student-view__field__value'>
          {props.currentViewedStudent &&
            (props.currentViewedStudent.contactinfo || 'N/A')}
        </span>
      </div>
    </div>
  );
};

StudentFullInfoDisplay.propTypes = {
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
  })
};

export default StudentFullInfoDisplay;
