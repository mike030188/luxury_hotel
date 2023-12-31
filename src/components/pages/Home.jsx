import React from 'react';
import { Paragraph, StyledHome, TitleUp } from '../styles/Home.style'
import Navbar from '../navBar/Navbar';
import Button from './Button';
import Scroll from './Scroll';
import Footer from '../footer/Footer';


const Home = () => {
  return (
    <StyledHome>
      <Navbar/>
        
        <TitleUp>
          <h3>WELCOME TO</h3>
          <h1>LUXURY</h1>
          <h2>HOTELS</h2>
          <p>Book your stay and enjoy Luxury <br />
            redefined at the most affordable rates.</p>
        </TitleUp>

        <Button />

        <Scroll/>

        <Paragraph>
          <p>All our room types are including complementary breakfast</p>
        </Paragraph>

        {/* <Card /> */}

        {/* <TitleDown></TitleDown> */}

        <Footer/>
    </StyledHome>
  )
}

export default Home