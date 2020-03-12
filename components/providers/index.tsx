import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { light, dark, Theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

interface IProviders {
  children: ReactNode;
}

const Providers = ({ children }: IProviders): ReactElement => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(light);

  useEffect(() => {
    const isDarkExist = localStorage.getItem('isDarkExist');
    if (isDarkExist) {
      setCurrentTheme(dark);
    }
  }, [currentTheme]);

  const changeCurrentTheme = (): void => {
    if (currentTheme === light) {
      setCurrentTheme(dark);
    } else {
      setCurrentTheme(light);
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <header>
        <button onClick={changeCurrentTheme}>toggle</button>
      </header>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Providers;
