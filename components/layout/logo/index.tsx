import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Circle, LogoWrapper } from './style';

export const Logo = (): ReactElement => {
  return (
    <LogoWrapper>
      <h1>
        <Link href="/">
          <a>
            <Circle />
          </a>
        </Link>
      </h1>
    </LogoWrapper>
  );
};
