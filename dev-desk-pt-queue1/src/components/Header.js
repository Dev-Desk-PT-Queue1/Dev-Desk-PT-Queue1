import React from 'react';
import Login from './Login';

const Header = () => {

  return (
    <div className='main-header'>
      <div className='img-left' />
      <div className='sub-header'>
        <Login />
      </div>
    </div>
  )
};

export default Header;