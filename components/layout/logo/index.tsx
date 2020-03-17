import React, { ReactElement } from 'react';
import { LogoIcon } from '../../icons/logo';

export const Logo = (): ReactElement => {
  return (
    <div>
      <h1>
        <a href="/">
          <LogoIcon />
        </a>
      </h1>
    </div>
  );
};
