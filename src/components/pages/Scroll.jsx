import React from 'react'
import scrollDown from '../../images/scrollDown.png'
import { ScrollIcon, StyledScroll } from '../styles/Scroll.style'

const Scroll = () => {
  return (
    <StyledScroll>
        <h1>SCROLL</h1>
        <ScrollIcon src={scrollDown} alt="" ></ScrollIcon>        
    </StyledScroll>
    
  )
}

export default Scroll