import React from 'react';

const Header = () => {
  return (
    <div className='main-header'>
      <img className='deskLogo' src={require('../DeskLogo.png')}/>
      <div className='sub-header'>
        <h1>Welcome, userName || please login mesg</h1>
        {/* add ham menu for home, login & authenticated options */}
      </div>
    </div>
  )
};

export default Header;