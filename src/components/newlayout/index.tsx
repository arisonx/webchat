import { ILayoutProps } from '@/@types/ILayoutProps';
import { LayoutContainer } from './styles';
import { GlobalStyles } from '@/styles/global';
import { AlignContentCenter } from '@/styles/agility';

export const Layout = ({
  children,
  centralizedComponents,
  classname,
}: ILayoutProps) => {
  GlobalStyles();
  return centralizedComponents === true ? (
    <LayoutContainer
      className={`${AlignContentCenter.toString()} ${classname}`}
    >
      {children}
    </LayoutContainer>
  ) : (
    <LayoutContainer>{children}</LayoutContainer>
  );
};
