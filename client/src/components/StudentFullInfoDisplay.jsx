import React from 'react';
import PropTypes from 'prop-types';

const StudentFullInfoDisplay = props => {
  return (
    <>
      <div>
        <span className='singleStudentViewField__label'>Status: </span>
        <span className='singleStudentViewField__value'>
          {props.currentViewedStudent && props.currentViewedStudent.status}
        </span>
      </div>
      <div>
        <span className='singleStudentViewField__label'>Age: </span>
        <span className='singleStudentViewField__value'>
          {props.currentViewedStudent && props.currentViewedStudent.age}
        </span>
      </div>
      <div>
        <span className='singleStudentViewField__label'>
          Insurance card expiry date:{' '}
        </span>
        <span className='singleStudentViewField__value'>
          {props.currentViewedStudent &&
            (props.currentViewedStudent.insuranceCardexpires || 'N/A')}
        </span>
      </div>
      <div>
        <span className='singleStudentViewField__label'>
          Birth certificate:{' '}
        </span>
        <span className='singleStudentViewField__value'>
          {props.currentViewedStudent &&
            (props.currentViewedStudent.birthcertificate || 'N/A')}
        </span>
      </div>
      <div>
        <span className='singleStudentViewField__label'>Special needs: </span>
        <span className='singleStudentViewField__value'>
          {props.currentViewedStudent &&
            props.currentViewedStudent.specialneeds}
        </span>
      </div>
      <div>
        <span className='singleStudentViewField__label'>
          Student's representative:{' '}
        </span>
        <span className='singleStudentViewField__value'>
          {props.currentViewedStudent &&
            props.currentViewedStudent.representative}
        </span>
      </div>
      <div>
        <span className='singleStudentViewField__label'>
          Contact information:{' '}
        </span>
        <span className='singleStudentViewField__value'>
          {props.currentViewedStudent &&
            (props.currentViewedStudent.contactinfo || 'N/A')}
        </span>
      </div>
    </>
  );
};

StudentFullInfoDisplay.propTypes = {
  currentViewedStudent: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    insuranceCardexpires: PropTypes.string,
    birthcertificate: PropTypes.string,
    specialneeds: PropTypes.string,
    representative: PropTypes.string,
    contactinfo: PropTypes.string
  })
};

export default StudentFullInfoDisplay;
