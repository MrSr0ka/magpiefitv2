
import React from 'react';
import Logo from '../../images/logo.png'

function Header() {
  return (
    <header>
    <div className='navi'>
        <div className='navi__logoBox'>
        <img className='logo' src={Logo} alt="Logo" />
        </div>
        <div className='navi__linksBox'>
        <ul className='navi__linksBox__linksList'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Clients</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
        </div>
    </div>
    </header>
  );
}

export default Header;
