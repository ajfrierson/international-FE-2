import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getChildren, logout } from '../store/actions';

import './HomePageStyles.css';

class HomePage extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        insuranceCard: PropTypes.string,
        birthCertificateExpires: PropTypes.string,
        specialNeeds: PropTypes.string,
        representative: PropTypes.string,
        contactInfo: PropTypes.string
      })
    ).isRequired,
    getChildren: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getChildren();
  }

  render() {
    return (
      <>
        <div>Home</div>
        <button type='button' onClick={this.props.logout}>
          Log Out
        </button>
        <div className='childrenGrid'>
          {this.props.children.map(child => (
            <div className='childrenGrid__child' key={child.id}>
              <h3>{child.name}</h3>
              <div>Status: {child.status}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    children: state.childReducer.children
  };
};

export default connect(
  mapStateToProps,
  {
    getChildren,
    logout
  }
)(HomePage);
