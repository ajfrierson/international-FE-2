import React from 'react';
import PropTypes from 'prop-types';

const SingleStudentViewPage = props => {
  return (
    <div>
      <h3>{props.student.name}</h3>
      <div>Status: {props.student.status}</div>
    </div>
  );
};

SingleStudentViewPage.propTypes = {
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
  }).isRequired
};

export default SingleStudentViewPage;
