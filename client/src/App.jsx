import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignInPage from './containers/SignInPage';
import AppPageContainer from './containers/AppPageContainer';

const App = props => {
  document.title = props.loggedInUser ? "Educell Student Records" : "Sign In - Educell Student Records";
  return (
    <div className="app-container">
      <div className="app-container__overlay-bg"></div>
      {props.loggedInUser ? <AppPageContainer {...props} /> : <SignInPage />}
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
