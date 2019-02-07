import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getSingleStudent,
  deleteStudent,
  populateFormForStudentUpdate
} from '../store/actions';

import StudentInfoForm from '../components/StudentInfoForm';
import StudentFullInfoDisplay from '../components/StudentFullInfoDisplay';

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
      represenative: PropTypes.string,
      contactinfo: PropTypes.string
    }),
    getSingleStudent: PropTypes.func.isRequired,
    deleteStudent: PropTypes.func.isRequired,
    populateFormForStudentUpdate: PropTypes.func.isRequired
  };

  state = {
    updateMode: false
  };

  componentDidMount() {
    this.props.getSingleStudent(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.setState({ updateMode: false });
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

  populateFormForStudentUpdate() {
    this.props.populateFormForStudentUpdate(this.props.currentViewedStudent);
  }

  toggleUpdateMode = e => {
    const toggledUpdateMode = !this.state.updateMode;
    this.setState(
      {
        updateMode: toggledUpdateMode
      },
      () => toggledUpdateMode && this.populateFormForStudentUpdate()
    );
  };

  render() {
    return (
      <div>
        <div>
          <h3>
            {this.props.currentViewedStudent &&
              this.props.currentViewedStudent.name}
          </h3>
          <button onClick={this.toggleUpdateMode}>
            {this.state.updateMode ? 'Cancel Edit' : 'Edit info'}
          </button>
        </div>
        {this.state.updateMode ? (
          <StudentInfoForm
            method='PUT'
            id={this.props.currentViewedStudent.id}
          />
        ) : (
          <StudentFullInfoDisplay
            currentViewedStudent={this.props.currentViewedStudent}
          />
        )}
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
    deleteStudent,
    populateFormForStudentUpdate
  }
)(SingleStudentViewPage);
