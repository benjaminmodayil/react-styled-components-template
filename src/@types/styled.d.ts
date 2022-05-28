import 'styled-components';
import { CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
    };
    fontSizes: {
      12: string;
      14: string;
      16: string;
      18: string;
      20: string;
      22: string;
    };
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}
