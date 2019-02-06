import React from 'react';
import PropTypes from 'prop-types';

const SingleChildViewPage = props => {
  return (
    <div>
      <h3>{props.child.name}</h3>
      <div>Status: {props.child.status}</div>
    </div>
  );
};

SingleChildViewPage.propTypes = {
  child: PropTypes.shape({
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

export default SingleChildViewPage;
