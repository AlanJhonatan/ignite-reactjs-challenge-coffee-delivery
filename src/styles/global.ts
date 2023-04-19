import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-hover']};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-title']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4,h5, h6 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 400;
  }

  span, p {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
  }
`
