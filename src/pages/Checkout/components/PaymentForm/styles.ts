import styled from 'styled-components'

export const PaymentFormContainer = styled.div`
  margin-top: 0.875rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};

  button {
  }
`

const FormHeaderBase = styled.div`
  display: flex;
  gap: 0.5rem;
  line-height: 1.3;
  margin-bottom: 2rem;

  div > span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: normal;
  }

  div > p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentFormHeader = styled(FormHeaderBase)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentMethodWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.875rem;
`

export const PaymentMethodButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;
  border-radius: 6px;
  border: 0;

  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  p {
    flex-grow: 1;
    text-align: left;
    white-space: nowrap;
  }

  svg {
    line-height: 0;
    color: ${(props) => props.theme.purple};
  }
`
