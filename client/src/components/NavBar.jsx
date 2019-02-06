import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logout } from '../store/actions';

const NavBar = props => {
  return (
    <nav>
      <button type='button' onClick={e => props.changePage("Home")}>
        Home
      </button>
      <button type='button' onClick={e => props.changePage("SingleChildAdd")}>
        Add New Child
      </button>
      <button type='button' onClick={props.logout}>
        Log Out
      </button>
    </nav>
  );
};

NavBar.propTypes = {
  changePage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    logout
  }
)(NavBar);
