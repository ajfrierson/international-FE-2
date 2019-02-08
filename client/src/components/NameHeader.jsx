import React from 'react';

const NameHeader = props => {
  return (
    <div className='flex-center-wrapper'>
      <header className='name-header'>
        <div className='name-header__overlay' />
        <h1 className='name-header__heading'>Educell</h1>
        <div className='name-header__desc'>
          Working to solve educational challenges in remote and low resource
          environments.
        </div>
      </header>
    </div>
  );
};

export default NameHeader;
