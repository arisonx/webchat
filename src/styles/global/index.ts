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