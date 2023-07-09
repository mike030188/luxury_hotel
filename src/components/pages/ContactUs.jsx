import React from 'react';
import { MidWrap, StyledContactUs } from '../styles/ContactUs.style';
import { Container } from '../styles/Container.style';
import Navbar from '../navBar/Navbar';
import Footer from '../footer/Footer';
import { Paragraph } from '../styles/Home.style';
import { StyledButton } from '../styles/Button.style';


const ContactUs = () => {
  return (
    <StyledContactUs>
      <Navbar/>
      <h4>CONTACT-US</h4>
      <Container style={{height:'1852px'}}>
        <Paragraph contactUs style={{display: 'flex', flexDirection:'column', textAlign:'left', height:'580px'}}>
          <h5>WE ARE HERE FOR YOU</h5>          
          <p style={{fontSize:''}}> 
            At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, <br/>
            please forward it to our support desk and we will get back to you as soon as possible.
          </p>
        </Paragraph>
        <MidWrap>
          <div left>
            <p>sfs</p>
            <div>afaef</div>
            <p>veve</p>
          </div>
          <div right style={{display: 'flex', justifyContent:'right'}}>
            <table>
              <tr>
                  <td>
                      <label style={{display: 'flex', 
                      flexDirection: "column",
                      color: "#14274A",
                      fontFamily: "Arial",
                      fontSize: "25px",                      
                      fontWeight: "400",
                      lineHeight: "normal"
                      }}>Name</label>

                      <input type="text"
                        style={{border: "1px solid #14274A80", 
                        fontStyle: "italic", 
                        width:'570px', 
                        height:'78px'}} />
                  </td>    
              </tr>
              <tr>
                  <td>
                      <label style={{display: 'flex', 
                      flexDirection: "column",
                      color: "#14274A",
                      fontFamily: "Arial",
                      fontSize: "25px",                      
                      fontWeight: "400",
                      lineHeight: "normal"
                      }}>Email Address</label>

                      <input type="email" style={{border: "1px solid #14274A80", 
                      fontStyle: "italic", 
                      width:'570px', 
                      height:'78px'}}/>
                  </td>    
              </tr>
              <tr>
                  <td>
                      <label style={{display: 'flex',
                       flexDirection: "column",
                       color: "#14274A",
                       fontFamily: "Arial",
                       fontSize: "25px",                      
                       fontWeight: "400",
                       lineHeight: "normal"
                       }}>Message</label>

                      <textarea name="message" id="" cols="" rows="" 
                        style={{border: "1px solid #14274A80", 
                        width:'570px', 
                        height:'352px'
                        }}></textarea>
                  </td>    
              </tr>
              <StyledButton submit style={{width:'180px', marginLeft:'390px'}}>SUBMIT</StyledButton>
            </table>
            
          </div>
        </MidWrap>
        
      </Container>
      <Footer/>
    </StyledContactUs>
  )
}

export default ContactUs