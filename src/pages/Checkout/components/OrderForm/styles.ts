import styled from 'styled-components'

export const OrderFormContainer = styled.form`
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
