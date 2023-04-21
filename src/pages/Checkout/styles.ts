import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  div {
    max-width: 640px;
  }
`

export const OrderForm = styled.form`
  padding: 2.5rem;
  margin-top: 1rem;

  background-color: ${(props) => props.theme['base-card']};

  display: grid;
  row-gap: 1rem;
  border-radius: 6px;
`

export const FormHeaderBase = styled.div`
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

export const OrderFormHeader = styled(FormHeaderBase)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const OrderFormInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};

  padding: 0.75rem;
  border-radius: 4px;

  line-height: 1.6;
  border: 1px solid ${(props) => props.theme['base-button']};
`

export const PaymentForm = styled.div`
  margin-top: 0.875rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};

  button {
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

export const SubmitOrderContainer = styled.div``
