import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  padding: 0 1.5rem 1.25rem 1.5rem;
`

export const LabelWrapper = styled.div`
  display: flex;
  gap: 4px;

  strong {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    line-height: 1.3;
    padding: 0.25rem 0.5rem;

    border-radius: 100px;
  }
`
