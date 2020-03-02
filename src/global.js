import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {   
    color: ${({ theme }) => theme.primaryDark};
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
 
  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: .3s;
    &:hover{
        opacity: 0.7;
    }
  }

  li{
    list-style-type: none;
  }

  .container {
    width: 100%;
    max-width:  ${({ theme }) => theme.mobile};
    margin: 0 auto;
    padding: 0.5rem;
  }
  
`