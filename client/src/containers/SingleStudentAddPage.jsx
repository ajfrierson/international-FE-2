import React from 'react';

import StudentInfoForm from '../components/StudentInfoForm';

const SingleStudentAddPage = props => {
  document.title = 'Add New Student - Educell Student Records';

  return (
    <div className='add-student-page'>
      <h2 className='add-student-page__heading'>New Student</h2>
      <StudentInfoForm method='POST' id={null} />
    </div>
  );
};

export default SingleStudentAddPage;
