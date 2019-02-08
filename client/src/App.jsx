import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import SingleStudentAddPage from './containers/SingleStudentAddPage';
import SingleStudentViewPage from './containers/SingleStudentViewPage';
import SignInPage from './containers/SignInPage';

const App = props => {
  return (
    <div className='app-container'>
      <div className='app-container__overlay-bg' />
      {props.loggedInUser ? (
        <div>
          <NavBar {...props} />
          <main>
            <Route exact path='/' render={props => <HomePage {...props} />} />
            <Route
              exact
              path='/students'
              render={props => <HomePage {...props} />}
            />
            <Route
              path='/students/:pageNum'
              render={props => <HomePage {...props} />}
            />
            <Route
              path='/addNewStudent'
              render={props => <SingleStudentAddPage {...props} />}
            />
            <Route
              path='/student/:id'
              render={props => <SingleStudentViewPage {...props} />}
            />
          </main>
        </div>
      ) : (
        <SignInPage />
      )}
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
