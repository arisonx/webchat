import { createStitches } from '@stitches/react';

export const {
  theme,
  config,
  createTheme,
  css,
  prefix,
  styled,
  reset,
  globalCss,
  keyframes,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      gray800: '#30302f',
      gray700: '#222121',
      gray100: '#e1e1e1',
      grayGlass: 'rgba(82, 84, 81, 0.2)',
      grayDark: '#262626',
      blue700: '#1A1AFF',
      blueHover: '#123ab3',
      blackLight: '#1A1A1A',
      whiteSmoke: '#F5F5F5',
      whiteText: '#E1E1E6',
      alertRedBase: '#EF665B',
      alertRedDark: '#71192F',
      alertRedLight: '#FCE8DB',
      bgSideBar: '#0e1111',
      bgAreaChat: '#313338',
      blueDark: '#03010b',
      violet: '#633BBC',
      cyan: '#07847E',
      blueDarkLight: '#282843',
    },
  },
  media: {
    phones: '(max-width: 640px)',
    tablet: '(min-width: 640px)',
    leptop: '(min-width:902px)',
    desktop: '(min-width: 1024px)',
  },
});
