import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSingleStudent } from '../store/actions';

class SingleStudentViewPage extends React.Component {
  static propTypes = {
    currentViewedStudent: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      insuranceCard: PropTypes.string,
      birthCertificateExpires: PropTypes.string,
      specialNeeds: PropTypes.string,
      representative: PropTypes.string,
      contactInfo: PropTypes.string
    }).isRequired,
    getSingleStudent: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getSingleStudent(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h3>
          {this.props.currentViewedStudent &&
            this.props.currentViewedStudent.name}
        </h3>
        <div>
          Status:{' '}
          {this.props.currentViewedStudent &&
            this.props.currentViewedStudent.status}
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
    getSingleStudent
  }
)(SingleStudentViewPage);
