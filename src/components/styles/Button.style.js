import styled from "styled-components";

export const StyledButton = styled.button`
display:flex;
align-items:center;
justify-content:${props=>props.email ? "" : "center"};
width: ${({wd}) => wd || '268px'};
height: 78px;
border: 3px solid #E0B973;
background-color: ${({bg}) => bg || '#E0B973'};
border-radius: ${props=>props.book ? "20px" : "5px"};
color: #FFF;
font-family: Montserrat;
font-size: 25px;
font-weight: 700;
line-height: normal;

&:hover{
    cursor: pointer;
}
`

export const Icon = styled.img`
width: 28px;
height: 26px;
margin-right: 10px;
` 
