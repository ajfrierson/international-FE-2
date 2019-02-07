import React from 'react';
import { Route } from 'react-router-dom';

import './PageStyles.css';

import NavBar from '../components/NavBar';
import HomePage from './HomePage';
import SingleStudentAddPage from './SingleStudentAddPage';
import SingleStudentViewPage from './SingleStudentViewPage';

const AppPageContainer = props => {
  return (
    <>
      <NavBar />
      <Route exact path='/' render={props => <HomePage {...props} />} />
      <Route
        path='/addNewStudent'
        render={props => <SingleStudentAddPage {...props} />}
      />
      <Route
        path='/student/:id'
        render={props => <SingleStudentViewPage {...props} />}
      />
    </>
  );
};

export default AppPageContainer;
