import { reset } from 'styled-reset';
import { createGlobalStyle } from './themed-components';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Ubuntu,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-size: 1.125rem;    
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    margin: 0;
    font-weight: 700;
    font-size: 1.125rem;    
  }

  @media (min-width: 768px) {
    body {
      font-size: 1rem;
    }
  }
`;
