import styled from 'styled-components';

export const Nav = styled.div`
padding: 0 150px;
display: flex;

`
export const Div = styled.div`
display: flex;
align-items: center;
flex: 1;
cursor: ${({right})=>right};

div{
    color: #FFF;
    font-family: Montserrat;
    font-size: 25px;    
    font-weight: 700;
    line-height: normal;

    &:hover {
    text-decoration: ${props=>props.right ? "underline" : ""};
    }
}


`
