import React from 'react';
import { FooterDiv, StyledFooter } from '../styles/Footer.style';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import { StyledButton } from '../styles/Button.style';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterDiv left >
        <h1>LUXURY</h1>
        <h6>HOTELS</h6>
        <p>497 Evergreen Rd. Roseville, CA 95673 <br /> 
         +44 345 678 903 <br />
         luxury_hotels@gmail.com</p>
      </FooterDiv>
      <FooterDiv mid1>
        <div>About Us</div>
        <div style={{margin: "30px 0"}}>Contact</div>
        <div>Terms & Conditions</div>
      </FooterDiv>
      <FooterDiv mid2>
        <a href="https://facebook.com"><FaFacebook style={{marginRight: "10px"}}/>Facebook</a>
        <a href="https://www.twitter.com" style={{margin: "20px 0px"}}><FaTwitter style={{marginRight: "10px"}}/>Twitter</a>
        <a href="https://instagram.com"><FaInstagram style={{marginRight: "10px"}}/>Instagram</a>
      </FooterDiv>
      <FooterDiv right>
        <div style={{marginBottom:'20px'}}>Subscribe to our newsletter</div>
        <div style={{display: 'flex', textDecoration:'none'}}>
          <StyledButton email bg='violet' wd='350px' style={{paddingLeft:'20px', fontSize:'24px', fontWeight:'normal'}}>Email address</StyledButton>
          <StyledButton ok bg='green' wd='100px'>OK</StyledButton>
        </div>        
      </FooterDiv>
    </StyledFooter>
  )
}

export default Footer