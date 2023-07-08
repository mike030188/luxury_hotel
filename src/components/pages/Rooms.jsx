import React from 'react';
import Navbar from '../navBar/Navbar';
import Button from './Button';
import Scroll from './Scroll';
import Footer from '../footer/Footer';
import { Paragraph, TitleUp } from '../styles/Home.style';
import { StyledRooms } from '../styles/Rooms.style';

const Rooms = () => {
  return (
    <StyledRooms>
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
    </StyledRooms>
  )
}

export default Rooms