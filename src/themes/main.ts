/* eslint-disable import/no-webpack-loader-syntax */
import { darken, lighten } from 'polished';

// These colors are taken from source/scss/utilities/_colors.scss
const colorsFromUtilities = {
  white: '#ffffff',
  black: '#001037',
};

const mainTheme = () => {
  return {
    colors: {
      ...colorsFromUtilities,

      // Below are "official" defined colors coming from new designs
      // Eventually, these will be used in place of the sass variables in _colors
      hasPhi: '#98E6D5',
      hasProviderError: '#FF99FC',
      activeGreen: '#42AE87',
      hotPink: '#D10373',
      hasProfanity: colorsFromUtilities.yellow,
      sentiment: {
        noSentiment: colorsFromUtilities.disabledGray,
        veryPositive: '#52C99A',
        positive: '#ABC96E',
        neutral: '#F2C14D',
        negative: '#EF9052',
        veryNegative: '#EB5E56',
      },
    },
    fontSizes: {
      12: `${12 / 16}rem`,
      14: `${14 / 16}rem`,
      16: `${16 / 16}rem`,
      18: `${18 / 16}rem`,
      20: `${20 / 16}rem`,
      22: `${22 / 16}rem`,
    },
  };
};

export default mainTheme;
