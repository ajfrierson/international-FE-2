import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../store/actions/loginActions';

import './NavStyles.css';

const NavBar = props => {
  return (
    <nav>
      <NavLink
        className='nav-link'
        activeClassName='nav-link--active'
        exact
        to='/'
      >
        Home
      </NavLink>
      <NavLink
        className='nav-link'
        activeClassName='nav-link--active'
        to='/addNewStudent'
      >
        Add New Student
      </NavLink>
      <NavLink
        className='nav-link'
        activeClassName='nav-link--active'
        to='/'
        onClick={props.logout}
      >
        <button type='button'>Log Out</button>
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
