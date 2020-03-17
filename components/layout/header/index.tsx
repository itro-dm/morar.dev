import React from 'react';
import { HeaderContainer, Wrapper } from './style';

import { ThemeToggler } from '../theme-toggle';
import { Logo } from '../logo';

interface IHeader {
  changeCurrentTheme?: () => void;
}

// TODO:  Figure out "Prop className did not match.  Server: Client:"
export const Header = ({ changeCurrentTheme }: IHeader) => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Logo />
        <ThemeToggler changeCurrentTheme={changeCurrentTheme} />
      </HeaderContainer>
    </Wrapper>
  );
};