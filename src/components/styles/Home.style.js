import styled from 'styled-components';
import homeBGimg from '../../images/homeBGimg.png';



export const StyledHome = styled.div`
background-image:url(${homeBGimg});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
width:auto;
height:1080px;

`

export const TitleUp = styled.div`
display:flex;
flex-direction: column;
color: #FFF;
padding-left: 150px;
padding-top: 193px;

h3{    
    font-family: Montserrat;
    font-size: 50px;    
    font-weight: 400;
    line-height: normal;
}

h1{    
    font-family: Garamond;
    font-size: 154px;    
    font-weight: 700;
    line-height: normal;
    letter-spacing: 10.78px;
}

h2{    
    font-family: Adobe Garamond Pro;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 24px;
}

p{
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.5px;
}
`

export const Paragraph = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 220px;
text-align: center;

p{
    color: #14274A;
    font-family: Montserrat;
    font-size: 36px;    
    font-weight: 400;
    line-height: normal;
}

`

