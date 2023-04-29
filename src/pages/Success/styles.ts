import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const SuccessHeader = styled.div`
  margin-bottom: 2.5rem;
  grid-column: span 2;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const SuccessInfos = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;

  background-color: linear-gradient(#dbac2c, #8047f8);
`
