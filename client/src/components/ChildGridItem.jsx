import React from 'react';
import PropTypes from 'prop-types';

const ChildGridItem = props => {
  return (
    <div className='childrenGrid__child' key={props.child.id}>
      <h3>{props.child.name}</h3>
      <div>Status: {props.child.status}</div>
    </div>
  );
};

ChildGridItem.propTypes = {
  child: PropTypes.shape({
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

export default ChildGridItem;
