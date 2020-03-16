import React, { ReactElement } from 'react';
import { LogoIcon } from '../../icons/logo';
import { Wrapper } from './style';

export const Logo = (): ReactElement => {
  return (
    <Wrapper>
      <h1>
        <a href="/">
          <LogoIcon />
        </a>
      </h1>
    </Wrapper>
  );
};
