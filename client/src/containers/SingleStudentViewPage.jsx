import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSingleStudent, deleteStudent } from '../store/actions';

class SingleStudentViewPage extends React.Component {
  static propTypes = {
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
    }),
    getSingleStudent: PropTypes.func.isRequired,
    deleteStudent: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getSingleStudent(this.props.match.params.id);
  }

  deleteStudent = e => {
    if (
      window.confirm(
        `Are you sure you want to delete the information of student ${
          this.props.currentViewedStudent.name
        }?`
      )
    ) {
      this.props.deleteStudent(this.props.currentViewedStudent.id);
    }
  };

  render() {
    return (
      <div>
        <h3>
          {this.props.currentViewedStudent &&
            this.props.currentViewedStudent.name}
        </h3>
        <div>
          <span className='singleStudentViewField__label'>Status: </span>
          <span className='singleStudentViewField__value'>
            {this.props.currentViewedStudent &&
              this.props.currentViewedStudent.status}
          </span>
        </div>
        <div>
          <span className='singleStudentViewField__label'>Age: </span>
          <span className='singleStudentViewField__value'>
            {this.props.currentViewedStudent &&
              this.props.currentViewedStudent.age}
          </span>
        </div>
        <div>
          <span className='singleStudentViewField__label'>
            Insurance card expiry date:{' '}
          </span>
          <span className='singleStudentViewField__value'>
            {this.props.currentViewedStudent &&
              (this.props.currentViewedStudent.insuranceCardexpires || 'N/A')}
          </span>
        </div>
        <div>
          <span className='singleStudentViewField__label'>
            Birth certificate:{' '}
          </span>
          <span className='singleStudentViewField__value'>
            {this.props.currentViewedStudent &&
              (this.props.currentViewedStudent.birthcertificate || 'N/A')}
          </span>
        </div>
        <div>
          <span className='singleStudentViewField__label'>Special needs: </span>
          <span className='singleStudentViewField__value'>
            {this.props.currentViewedStudent &&
              this.props.currentViewedStudent.specialneeds}
          </span>
        </div>
        <div>
          <span className='singleStudentViewField__label'>
            Student's representative:{' '}
          </span>
          <span className='singleStudentViewField__value'>
            {this.props.currentViewedStudent &&
              this.props.currentViewedStudent.representative}
          </span>
        </div>
        <div>
          <span className='singleStudentViewField__label'>
            Contact information:{' '}
          </span>
          <span className='singleStudentViewField__value'>
            {this.props.currentViewedStudent &&
              (this.props.currentViewedStudent.contactinfo || 'N/A')}
          </span>
        </div>
        <div>
          <button type='button' onClick={this.deleteStudent}>
            Delete Student
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentViewedStudent: state.studentDataReducer.currentViewedStudent
  };
};

export default connect(
  mapStateToProps,
  {
    getSingleStudent,
    deleteStudent
  }
)(SingleStudentViewPage);
