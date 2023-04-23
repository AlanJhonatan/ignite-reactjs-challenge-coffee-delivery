import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  gap: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  div {
    flex-grow: 1;

    div {
      display: flex;
      gap: 0.5rem;
    }
  }
`

export const RemoveCartButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem;
  border: 0;
  line-height: 1.6;
  border-radius: 8px;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  svg {
    color: ${(props) => props.theme.purple};
  }
`
