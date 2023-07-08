import React from 'react'
import { Icon, StyledButton } from '../styles/Button.style'
import houseIcon from '../../images/houseIcon.png'

const Button = () => {
  return (
    <StyledButton book style={{margin:'98px 765px 70px'}}>
        <Icon src={houseIcon} alt="" ></Icon>
        BOOK NOW
    </StyledButton>
    
  )
}

export default Button