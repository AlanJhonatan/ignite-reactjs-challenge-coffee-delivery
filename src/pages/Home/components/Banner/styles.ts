import styled from 'styled-components'
import { defaultTheme } from '../../../../styles/default'

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5.75rem 0;

  /* background: ${(props) => props.theme['yellow-light']}; */

  div {
    h2 {
      font-size: 3rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }

    h3 {
      font-family: 'Roboto', sans-serif;
      margin-bottom: 3rem;
    }
  }
`
export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.65rem 2.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 0.75rem;
  }
`

interface IconCircleProps {
  backgroundColor: keyof typeof defaultTheme
}

export const IconCircle = styled.div<IconCircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  line-height: 0;

  width: 2rem;
  background-color: ${(props) => props.theme[props.backgroundColor]};
  color: ${(props) => props.theme.white};

  border-radius: 50%;
  border: 0;
`
