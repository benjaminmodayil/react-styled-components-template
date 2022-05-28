import { DefaultTheme, GlobalStyleComponent } from 'styled-components';
import mainTheme from './main';
import GlobalStyles from './GlobalStyle';

export const main = mainTheme;
export const GlobalStyle: GlobalStyleComponent<
  Record<string, unknown>,
  DefaultTheme
> = GlobalStyles;
