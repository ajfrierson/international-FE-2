import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const StudentGridItem = props => {
  return (
    <div className='studentsGrid__student'>
      <h3>{props.student.name}</h3>
      <span>Status: </span>
      <span>{props.student.status}</span>
      <NavLink to={`/student/${props.student.id}`}>View All Info</NavLink>
    </div>
  );
};

StudentGridItem.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default StudentGridItem;
