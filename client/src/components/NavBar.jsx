import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../store/actions/loginActions';

const NavBar = props => {
  return (
    <nav className='navbar'>
      <div className='navbar__overlay' />
      <h2 className='navbar__heading'>Educell</h2>
      <ul className='navbar__menu'>
        <li className='navbar__menu__item'>
          <NavLink
            className='navbar__menu__item__link'
            activeClassName='navbar__menu__item__link--active'
            to='/students'
          >
            Home
          </NavLink>
        </li>
        <li className='navbar__menu__item'>
          <NavLink
            className='navbar__menu__item__link'
            activeClassName='navbar__menu__item__link--active'
            to='/addNewStudent'
          >
            Add New Student
          </NavLink>
        </li>
        <li className='navbar__menu__item'>
          <NavLink
            className='navbar__menu__item__link'
            activeClassName='navbar__menu__item__link--active'
            to='/'
            onClick={props.logout}
          >
            <button className='navbar__menu__item__link__button' type='button'>
              Log Out
            </button>
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
