import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 0;

  nav {
    display: flex;
    flex: 1;
    justify-content: space-between;

    div {
      gap: 0.75rem;
      display: flex;
    }
  }
`

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  padding: 0.5rem;
  border-radius: 8px;
  line-height: 1.6;

  cursor: pointer;
`

export const LocationButton = styled(BaseButton)`
  gap: 5px;

  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};

  font-size: 0.875rem;
`

export const CheckoutButton = styled(BaseButton)`
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
`
