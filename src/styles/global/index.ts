import { globalCss } from '../config';
import { DarkTheme } from '../themes';
export const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'body, html': {
    maxWidth: '100vw',
    overflowX: 'hidden',
    backgroundColor: DarkTheme.colors.background.value,
    height: '100vh',
  },
});

export const BgSvg = globalCss({
  body: {
    '@phones': {
      backgroundImage: "url('/bgmobile.svg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    '@tablet': {
      backgroundImage: "url('/bgtablets.svg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },

    '@leptop': {
      backgroundImage: "url('/bglaptop.svg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    '@desktop': {
      backgroundImage: "url('/bgdesktop.svg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  },
});
