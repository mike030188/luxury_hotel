import React from 'react';
import Logo from '../pages/Logo';
import { Div, Nav } from '../styles/Navbar.style';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <Div left>
        <Logo/>
      </Div>
      <Div right="pointer" style={{justifyContent: 'space-between'}}>
        <Link to='/' style={{textDecoration: 'none'}}>
        <div>Home</div>
        </Link>
        <Link to='facilities' style={{textDecoration: 'none'}}>
        <div>Facilities</div>
        </Link>
        <Link to='rooms' style={{textDecoration: 'none'}}>
        <div>Rooms</div>
        </Link>
        <Link to='contactus' style={{textDecoration: 'none'}}>
        <div>Contact-us</div>
        </Link>        
      </Div>
    </Nav>
  )
}

export default Navbar