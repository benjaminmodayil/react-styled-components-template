const colorsFromUtilities = {
  white: '#ffffff',
  black: '#001037',
};

const mainTheme = () => {
  return {
    colors: {
      ...colorsFromUtilities,
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
