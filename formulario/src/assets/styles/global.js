import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Mukta', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor};
    font-size: 16px;
  }

  button{
    cursor: pointer;
  }
`;
