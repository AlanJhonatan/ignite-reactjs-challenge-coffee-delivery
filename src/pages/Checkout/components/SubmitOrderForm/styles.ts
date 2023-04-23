import styled from 'styled-components'

export const SubmitOrderFormContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
`

export const Separator = styled.div`
  margin: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const OrderInfosWrapper = styled.div`
  margin-bottom: 1.5rem;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    line-height: 1.3;
    margin-bottom: 0.875rem;
  }

  & span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.9375rem;
  }

  &:last-child {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: bold;
    font-size: 1.25rem;
  }
`

export const SubmitOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;

  border: 0;
  line-height: 1.6;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: bold;

  cursor: pointer;
`
