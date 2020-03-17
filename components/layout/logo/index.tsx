import React, { ReactElement } from 'react';
import { LogoIcon } from '../../icons/logo';
import Link from 'next/link';

export const Logo = (): ReactElement => {
  return (
    <div>
      <h1>
        <Link href="/">
          <a>
            <LogoIcon />
          </a>
        </Link>
      </h1>
    </div>
  );
};
