import styled from 'styled-components';

export const StyledFooter = styled.div`
display: flex;
align-items: center;
background-color: #14274A;
height: 300px;
padding: 0 150px;


`
export const FooterDiv = styled.div`
display: flex;
flex-direction: column;
color: #FFF;
flex: 1;

h1{    
    font-family: Garamond;
    font-size: 25px;    
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.75px;
}

h6{
    font-family: Garamond;
    font-size: 9px;    
    font-weight: 700;
    line-height: normal;
    letter-spacing: 5.4px;
    margin: 5px 0 20px;
    padding-left: 30px;
}

p{
    font-family: Montserrat;
    font-size: 14px;    
    font-weight: 400;
    line-height: normal;
}

div{
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;

    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}

a{
    color: #F7F7F7;
    font-family: Montserrat;
    font-size: 16px;    
    font-weight: 400;
    line-height: 194.9%;
    text-decoration: none;
    display: flex;
    align-items: center;
}
`
