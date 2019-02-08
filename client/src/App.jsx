import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';

import SignInPage from './containers/SignInPage';
import AppPageContainer from './containers/AppPageContainer';

const App = props =>
  props.loggedInUser ? <AppPageContainer {...props} /> : <SignInPage />;

App.propTypes = {
  loggedInUser: PropTypes.string
};

const mapStateToProps = state => {
  return { loggedInUser: state.loginReducer.loggedInUser };
};

export default connect(mapStateToProps)(App);
