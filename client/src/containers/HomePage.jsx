import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getChildren, logout } from '../store/actions';

import './HomePageStyles.css';

import '../components/ChildGridItem';
import ChildGridItem from '../components/ChildGridItem';

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
            <ChildGridItem key={child.id} child={child} />
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
