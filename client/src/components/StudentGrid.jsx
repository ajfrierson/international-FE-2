import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getStudents } from '../store/actions/studentDataActions';

import StudentGridItem from './StudentGridItem';

const StudentGrid = props => {
  const [pageNumber, setPageNumber] = useState(
    +props.match.params.pageNum || 1
  );

  useEffect(() => {
    props.getStudents();
    props.history.push(`/students/${pageNumber}`);
  }, [pageNumber]);

  const prevPage = e => {
    const newPageNumber = pageNumber > 1 ? +pageNumber - 1 : pageNumber;
    setPageNumber(newPageNumber);
  };

  const nextPage = e => {
    const newPageNumber =
      pageNumber < props.maxPageNumber ? +pageNumber + 1 : pageNumber;
    setPageNumber(newPageNumber);
  };

  const fromItem = props.studentsPerPage * (pageNumber - 1);
  const toItem = fromItem + props.studentsPerPage;

  return (
    <>
      <div className='studentsGrid'>
        {props.students &&
          props.students
            .slice(fromItem, toItem)
            .map(student => (
              <StudentGridItem key={student.id} student={student} />
            ))}
      </div>
      <div>
        <button type='button' onClick={prevPage}>
          Previous Page
        </button>
        <button type='button' onClick={nextPage}>
          Next Page
        </button>
      </div>
    </>
  );
};

StudentGrid.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  ),
  studentsPerPage: PropTypes.number,
  maxPageNumber: PropTypes.number
};

const mapStateToProps = state => {
  return {
    students: state.studentDataReducer.students,
    studentsPerPage: state.studentDataReducer.studentsPerPage,
    maxPageNumber: state.studentDataReducer.maxPageNumber
  };
};

export default connect(
  mapStateToProps,
  {
    getStudents
  }
)(StudentGrid);
