import React, { ReactNode } from 'react';
import { HeaderContainer, StyledLink, Wrapper } from './style';
import Link from 'next/link';

import { ThemeToggler } from '../theme-toggle';
import { Logo } from '../logo';

interface IHeader {
  changeCurrentTheme?: () => void;
}

interface ILinkWrapper {
  href: string;
  children: ReactNode;
}

// TODO:  Figure out "Prop className did not match.  Server: Client:"
export const Header = ({ changeCurrentTheme }: IHeader) => {
  const LinkWrapper = ({ href, ...props }: ILinkWrapper) => (
    <Link href={href} passHref>
      <StyledLink {...props} />
    </Link>
  );

  return (
    <Wrapper>
      <HeaderContainer>
        <Logo />
        <LinkWrapper href={'/about'}>About me</LinkWrapper>
        <LinkWrapper href={'/knowledge'}>What I known</LinkWrapper>
        <LinkWrapper href={'/portfolio'}>What I did</LinkWrapper>
        <LinkWrapper href={'/contacts'}>Contacts</LinkWrapper>
        <ThemeToggler changeCurrentTheme={changeCurrentTheme} />
      </HeaderContainer>
    </Wrapper>
  );
};
