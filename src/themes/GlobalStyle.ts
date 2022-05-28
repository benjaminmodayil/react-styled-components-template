import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';

const GlobalStyle: GlobalStyleComponent<Record<string, unknown>, DefaultTheme> = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-family: sans-serif;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
`;

export default GlobalStyle;
