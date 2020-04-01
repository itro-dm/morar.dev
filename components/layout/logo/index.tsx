import React, { ReactElement } from 'react';
import { LogoIcon } from '../../icons/logo';
import Link from 'next/link';
import { Circle } from './style';

export const Logo = (): ReactElement => {
  return (
    <div>
      <h1>
        <Link href="/">
          <a>
            <Circle />
          </a>
        </Link>
      </h1>
    </div>
  );
};
