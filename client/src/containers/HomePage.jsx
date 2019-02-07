import React from 'react';

import StudentGrid from '../components/StudentGrid';

const HomePage = props => {
  return (
    <main>
      <StudentGrid {...props} />
    </main>
  );
};

export default HomePage;
