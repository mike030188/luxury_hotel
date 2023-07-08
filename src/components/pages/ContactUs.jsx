import React from 'react';
import { StyledContactUs } from '../styles/ContactUs.style';
import { Container } from '../styles/Container.style';
import Navbar from '../navBar/Navbar';
import Footer from '../footer/Footer';


const ContactUs = () => {
  return (
    <StyledContactUs>
      <Navbar/>
      <h4>CONTACT-US</h4>
      <Container style={{height:'1852px'}}>

      </Container>
      <Footer/>
    </StyledContactUs>
  )
}

export default ContactUs