import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo.svg';

const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding:8px;
  background: #fff
  box-shadow: 0 0 6px 0 #000000a8;
  z-index: 999;
`;

const Header = () => (
  <header>
    <NavBar>
      <NavLink to="/" exact={true}>
        <img src={logo} alt="Q-CTRL Logo" />
      </NavLink>
    </NavBar>
  </header>
);

export default Header;
