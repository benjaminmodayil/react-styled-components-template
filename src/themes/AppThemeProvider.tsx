import React from 'react';
import * as themes from '../themes';
import { ThemeProvider, DefaultTheme } from 'styled-components';

interface Props {
  children: React.ReactNode;
  theme?: DefaultTheme;
}

export default function AppThemeProvider({ children, theme = themes.main() }: Props) {
  const { GlobalStyle } = themes;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
