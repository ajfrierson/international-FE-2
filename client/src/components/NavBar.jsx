import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../store/actions/loginActions';

const NavBar = props => {
  return (
    <nav className='app-container__page__navbar'>
      <div className='app-container__page__navbar__overlay' />
      <h2 className='app-container__page__navbar__heading'>
        Educell
      </h2>
      <ul className='app-container__page__navbar__menu'>
        <li className='app-container__page__navbar__menu__item'>
          <NavLink
            className='nav-link'
            activeClassName='nav-link--active'
            to='/students'
          >
            Home
          </NavLink>
        </li>
        <li className='app-container__page__navbar__menu__item'>
          <NavLink
            className='nav-link'
            activeClassName='nav-link--active'
            to='/addNewStudent'
          >
            Add New Student
          </NavLink>
        </li>
        <li className='app-container__page__navbar__menu__item'>
          <NavLink
            className='nav-link'
            activeClassName='nav-link--active'
            to='/'
            onClick={props.logout}
          >
            <button type='button'>Log Out</button>
          </NavLink>
        </li>
      </ul>
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
