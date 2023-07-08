import styled from 'styled-components'

export const Container = styled.div` 
  width:100%;
  max-width: 1920px;
  background-color: #FFF;

  @media (max-width: 768px) {
    flex-direction: column;
}
`