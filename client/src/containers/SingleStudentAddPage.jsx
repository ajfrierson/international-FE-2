import React from 'react';

import StudentInfoForm from '../components/StudentInfoForm';

const SingleStudentAddPage = props => {
  return (
    <>
      <h2>New Student</h2>
      <StudentInfoForm method='POST' id={null} />
    </>
  );
};

export default SingleStudentAddPage;
