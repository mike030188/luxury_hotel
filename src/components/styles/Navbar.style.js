import styled from 'styled-components';

export const Nav = styled.div`
padding: 0 150px;
display: flex;
/* flex-direction: row;
position: fixed; */

@media (max-width: 768px) {
    flex-direction: column;
    
}
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

@media (max-width: 768px) {
    flex-direction: column;
}

`
