import 'styled-components';
import { CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    buttons: {
      success: {
        background: string;
        hover: string;
      };
      fail: {
        background: string;
        hover: string;
      };
      danger: {
        background: string;
        hover: string;
      };
      primary: {
        background: string;
        hover: string;
      };
      warning: {
        background: string;
        hover: string;
      };
      gray: {
        background: string;
        hover: string;
        color: string;
        hoverColor: string;
        borderColor: string;
      };
      none: {
        background: string;
        color: string;
        hover: string;
        hoverColor: string;
      };
      link: {
        background: string;
        color: string;
        hover: string;
        hoverColor: string;
      };
    };
    colors: {
      white: string;
      black: string;
      orange: string;
      yellow: string;
      red: string;
      pink: string;
      lightGreen: string;
      green: string;
      neonGreen: string;
      gray: string;
      darkGray: string;
      lightGray: string;
      hoverGray: string;
      grayBlue: string;
      borderBlue: string;
      hasProviderError: string;
      hasPhi: string;
      badgeGreen: string;
      seafoam: string;
      blue: string;
      purple: string;
      fuscia: string;
      magenta: string;
      background: string;
      darkBlue: string;
      linkBlue: string;
      slateGray: string;
      canvasGray: string;
      midnight: string;
      borderGray: string;
      boxShadowGray: string;
      positive: string;
      negative: string;
      neutral: string;
      label: string;
      hasProfanity: string;
      activeGreen: string;
      hotPink: string;
      sentiment: {
        veryPositive: string;
        positive: string;
        neutral: string;
        negative: string;
        veryNegative: string;
      };
      [key: string]:
        | string
        | {
            veryPositive: string;
            positive: string;
            neutral: string;
            negative: string;
            veryNegative: string;
          };
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
