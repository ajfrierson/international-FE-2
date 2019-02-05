import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';

import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';

const App = props => {
  return (
    <div className='App'>
      {props.loggedInUser ? <HomePage /> : <LoginPage />}
    </div>
  );
};

App.propTypes = {
  loggedInUser: PropTypes.string
};

const mapStateToProps = state => {
  return { loggedInUser: state.loginReducer.loggedInUser };
};

export default connect(mapStateToProps)(App);
