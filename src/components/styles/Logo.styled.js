import styled from "styled-components";
import logoRect from '../../images/LogoRectangle.png';

export const StyledLogo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image:url(${logoRect});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 256px;
height: 149px;

h1{
    color: #14274A;
    font-family: Garamond;
    font-size: 40px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 6px;
}

p{
    color: #14274A;
    font-family:Garamond;
    font-size: 15px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 9px;
}

`