import React from 'react'
import { Icon, StyledButton } from '../styles/Button.style'
import houseIcon from '../../images/houseIcon.png'

const Button = () => {
  return (
    <StyledButton>
        <Icon src={houseIcon} alt="" ></Icon>
        BOOK NOW
    </StyledButton>
    
  )
}

export default Button