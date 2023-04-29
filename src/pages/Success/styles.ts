import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6.375rem;
`
export const SuccessHeader = styled.div`
  margin-bottom: 2.5rem;
  grid-column: span 2;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const SuccessInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2.5rem;
  border-radius: 6px 36px;

  border: 1px solid ${(props) => props.theme['yellow-dark']};

  /* div:not(:last-child) {
    margin-bottom: 2rem;
  } */
`
