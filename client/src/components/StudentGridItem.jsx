import React from 'react';
import PropTypes from 'prop-types';

const StudentGridItem = props => {
  return (
    <div className='studentsGrid__student'>
      <h3>{props.student.name}</h3>
      <span>Status: </span>
      <span>{props.student.status}</span>
    </div>
  );
};

StudentGridItem.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    insuranceCard: PropTypes.string,
    birthCertificateExpires: PropTypes.string,
    specialNeeds: PropTypes.string,
    representative: PropTypes.string,
    contactInfo: PropTypes.string
  })
};

export default StudentGridItem;
