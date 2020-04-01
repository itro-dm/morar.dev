import React, { ReactNode } from 'react';
import { HeaderContainer, StyledLink, Wrapper } from './style';
import Link from 'next/link';

import { ThemeToggler } from '../theme-toggle';
import { Logo } from '../logo';

interface IHeader {
  changeCurrentTheme?: () => void;
  isHomePage: boolean;
}

interface ILinkWrapper {
  href: string;
  children: ReactNode;
}

// TODO:  Figure out "Prop className did not match.  Server: Client:"
export const Header = ({ changeCurrentTheme, isHomePage }: IHeader) => {
  const LinkWrapper = ({ href, ...props }: ILinkWrapper) => (
    <Link href={href} passHref>
      <StyledLink {...props} />
    </Link>
  );

  return (
    <Wrapper isHomePage={isHomePage}>
      <HeaderContainer>
        <Logo />
        {!isHomePage && (
          <>
            <LinkWrapper href={'/about'}>About</LinkWrapper>
            <StyledLink
              href={'https://www.notion.so/DevWiki-ca55469a791e4a77968cfd48c7c0c0fb'}
              target="_blank">
              What I known
            </StyledLink>
            {/*<LinkWrapper href={'/portfolio'}>What I did</LinkWrapper>*/}
            <LinkWrapper href={'/contacts'}>Contacts</LinkWrapper>
          </>
        )}
        <ThemeToggler changeCurrentTheme={changeCurrentTheme} />
      </HeaderContainer>
    </Wrapper>
  );
};
