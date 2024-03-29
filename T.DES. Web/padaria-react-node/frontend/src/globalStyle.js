import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
