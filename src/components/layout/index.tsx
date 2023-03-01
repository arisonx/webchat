import { GlobalStyles, BgSvg } from '@/styles/global';
import React from 'react';
import { LayoutComponent } from './styles';
import { CSS } from '@stitches/react/types';
interface IPropsLayout {
  children: React.ReactNode;
  svg: boolean;
  css?: CSS;
}
export const Layout = ({ children, svg, css }: IPropsLayout) => {
  if (svg === true) {
    BgSvg();
  }
  GlobalStyles();
  return <LayoutComponent css={css}>{children}</LayoutComponent>;
};
