import React from 'react';

import './PageStyles.css';

import NavBar from '../components/NavBar';
import HomeChildGrid from '../components/HomeChildGrid';
import SingleChildAddPage from './SingleChildAddPage';
import SingleChildViewPage from './SingleChildViewPage';

class PageContainer extends React.Component {
  state = {
    currentPage: 'Home',
    currentChild: null
  };

  changePage = (page, child) => {
    this.setState({
      currentPage: page,
      currentChild: page === 'SingleChildView' && child ? child : null
    });
  };

  render() {
    switch (this.state.currentPage) {
      case 'Home':
        return (
          <>
            <NavBar changePage={this.changePage} />
            <HomeChildGrid changePage={this.changePage} />
          </>
        );
      case 'SingleChildAdd':
        return (
          <>
            <NavBar changePage={this.changePage} />
            <SingleChildAddPage />
          </>
        );
      case 'SingleChildView':
        return (
          <>
            <NavBar changePage={this.changePage} />
            <SingleChildViewPage child={this.state.currentChild} />
          </>
        );
      default:
        return null;
    }
  }
}

export default PageContainer;
