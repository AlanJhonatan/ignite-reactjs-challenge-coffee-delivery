import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 72px;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  box-shadow: none;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};
  text-align: center;

  svg {
    color: ${(props) => props.theme.purple};
    line-height: 0;

    cursor: pointer;
  }
`
