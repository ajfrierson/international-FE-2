import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getStudents } from '../store/actions';

import StudentGridItem from './StudentGridItem';

const studentsPerPage = 2;
class StudentGrid extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
      })
    )
  };

  state = {
    pageNumber: this.props.match.params.pageNum || 1,
    maxPageNumber: Math.ceil(this.props.students.length)
  };

  componentDidMount() {
    this.props.getStudents();
    this.setState({maxPageNumber: Math.ceil(this.props.students.length) / studentsPerPage});
    console.log(this.props.match.params.pageNum);
  }

  prevPage = e => {
    const pageNumber =
      this.state.pageNumber > 1
        ? +this.state.pageNumber - 1
        : this.state.pageNumber;
    this.setState({ pageNumber }, () =>
      this.props.history.push(`/students/${pageNumber}`)
    );
  };

  nextPage = e => {
    const pageNumber = this.state.pageNumber < this.state.maxPageNumber ? +this.state.pageNumber + 1 : this.state.pageNumber;
    this.setState({ pageNumber }, () =>
      this.props.history.push(`/students/${pageNumber}`)
    );
  };

  render() {
    const fromItem = studentsPerPage * (this.state.pageNumber - 1), toItem = fromItem + studentsPerPage;

    return (
      <>
        <div className='studentsGrid'>
          {this.props.students &&
            this.props.students.slice(fromItem, toItem).map(student => (
              <StudentGridItem key={student.id} student={student} />
            ))}
        </div>
        <div>
          <button type='button' onClick={this.prevPage}>
            Previous Page
          </button>
          <button type='button' onClick={this.nextPage}>
            Next Page
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.studentDataReducer.students
  };
};

export default connect(
  mapStateToProps,
  {
    getStudents
  }
)(StudentGrid);
