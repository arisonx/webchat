import { styled } from '@/styles/config';
import { DarkTheme } from '@/styles/themes';
export const LayoutComponent = styled('main', {
  width: '100%',
  height: '100vh',
  position: 'relative',
  color: '$whiteSmoke',
  backgroundColor: DarkTheme.colors.background.value,
});
