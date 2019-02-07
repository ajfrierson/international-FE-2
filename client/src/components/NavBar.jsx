import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../store/actions';

const NavBar = props => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/addNewStudent'>Add New Student</NavLink>
      <NavLink to='/' onClick={props.logout}>
        Log Out
      </NavLink>
    </nav>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    logout
  }
)(NavBar);
