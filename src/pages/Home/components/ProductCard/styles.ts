import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  padding: 0 1.5rem 1.25rem 1.5rem;
  margin-top: 3.375rem;

  img {
    margin-top: -1.25rem;
  }
`

export const ProductDescriptionWrapper = styled.div`
  text-align: center;
  margin-bottom: 1.875rem;

  h3 {
    line-height: 1.6;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }
`

export const LabelWrapper = styled.div`
  display: flex;
  gap: 4px;

  margin-top: 0.75rem;
  margin-bottom: 1rem;

  strong {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    line-height: 1.3;
    padding: 0.25rem 0.5rem;

    border-radius: 100px;
    text-transform: uppercase;
    font-size: 0.625rem;
  }
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const PriceContainer = styled.div`
  flex: 1;
  align-items: center;
  font-size: 0.875rem;

  color: ${(props) => props.theme['base-text']};
  strong {
    font-family: 'Baloo 2';
    line-height: 1.6;
    font-size: 1.5rem;
  }
`

export const AddCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  padding: 0.5rem;
  border: 0;

  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  cursor: pointer;
`
