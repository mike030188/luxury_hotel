import React from 'react'
import { ParagraphUp, StyledHome, Title } from '../styles/Home.style'
import Navbar from '../navBar/Navbar'
import Button from './Button'
import Scroll from './Scroll'

const Home = () => {
  return (
    <StyledHome>
        <Navbar/>
        <Title>
          <h3>WELCOME TO</h3>
          <h1>LUXURY</h1>
          <h2>HOTELS</h2>
          <p>Book your stay and enjoy Luxury <br />
            redefined at the most affordable rates.</p>
        </Title>
        <Button />
        <Scroll/>
        <ParagraphUp>
          <p>All our room types are including complementary breakfast</p>
        </ParagraphUp>
        {/* <Card /> */}
    </StyledHome>
  )
}

export default Home