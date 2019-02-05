import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logout } from '../store/actions';

const HomePage = props => {
  return (
    <>
      <div>Home</div>
      <button type='button' onClick={props.logout}>
        Log Out
      </button>
    </>
  );
};

HomePage.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    logout
  }
)(HomePage);
