import React from 'react';

import StudentGrid from '../components/StudentGrid';

const HomePage = props => {
  return (
    <div className="home-page">
      <h1 className="home-page__heading">List of Educell students:</h1>
      <StudentGrid {...props} />
    </div>
  );
};

export default HomePage;
