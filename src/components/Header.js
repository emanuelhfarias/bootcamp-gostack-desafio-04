import React from 'react';

import './Header.css';
import Logo from '../assets/logo-facebook.svg';
import User from '../assets/user.svg';

function Header() {
  return (
    <header>
      <img className="logo" src={Logo} alt="logo" />
      <ul>
        <li><p>Meu perfil</p></li>
        <li><img src={User} /></li>
      </ul>
    </header>
  )
}

export default Header;