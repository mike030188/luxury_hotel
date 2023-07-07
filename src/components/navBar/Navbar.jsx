import React from 'react';
import Logo from '../pages/Logo';
import { Div, Nav } from '../styles/Navbar.style';

const Navbar = () => {
  return (
    <Nav>
      <Div left>
        <Logo/>
      </Div>
      <Div right="pointer" style={{justifyContent: 'space-between'}}>
        <div>Home</div>
        <div>Facilities</div>
        <div>Rooms</div>
        <div>Contact-us</div>
      </Div>
    </Nav>
  )
}

export default Navbar