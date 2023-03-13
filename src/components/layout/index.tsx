import { IPropsLayout } from '@/@types/layoutProps';
import { GlobalStyles, BgSvg } from '@/styles/global';
import React from 'react';
import { LayoutComponent } from './styles';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: true,
});
export const Layout = ({ children, svg, css }: IPropsLayout) => {
  if (svg === true) {
    BgSvg();
  }
  GlobalStyles();
  return <LayoutComponent className={roboto.className} css={css}>{children}</LayoutComponent>;
};
