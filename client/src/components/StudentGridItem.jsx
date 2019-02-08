import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const StudentGridItem = props => {
  return (
    <div className='home-page__student-grid__item'>
      <div className='home-page__student-grid__item__overlay' />
      <h3 className='home-page__student-grid__item__heading'>
        {props.student.name}
      </h3>
      <span className='home-page__student-grid__item__label'>Status: </span>
      <span className='home-page__student-grid__item__value'>
        {props.student.status}
      </span>
      <div className='home-page__student-grid__item__link'>
        <NavLink to={`/student/${props.student.id}`}>
          <button type='button'>View All Info</button>
        </NavLink>
      </div>
    </div>
  );
};

StudentGridItem.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default StudentGridItem;
