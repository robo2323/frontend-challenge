import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.svg'

const Header = () => (
  <header>
    <nav>
      <NavLink to="/" exact={true} >
        <img src={logo} alt="Q-CTRL Logo" />
      </NavLink>
    </nav>
  </header>
);

export default Header;
