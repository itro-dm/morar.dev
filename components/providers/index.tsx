import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import styled, { ThemeProvider } from '../../styles/themed-components';
import { light, dark, Theme } from '../../styles/theme';

import { Header } from '../layout/header';

interface IProviders {
  children: ReactNode;
  pathname: string;
}

const Main = styled.main`
  padding-top: 60px;
  background: ${({ theme }) => theme.background};
  position: relative;
`;

const Providers = ({ children, pathname }: IProviders): ReactElement => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(light);
  const HOME_PAGE_PATH = '/';
  const isHomePage = HOME_PAGE_PATH === pathname;

  useEffect(() => {
    const isDarkExist = localStorage.getItem('isDarkExist');

    if (isDarkExist === 'true') {
      setCurrentTheme(dark);
    } else {
      setCurrentTheme(light);
    }
  }, [currentTheme]);

  const changeCurrentTheme = (): void => {
    if (currentTheme === light) {
      setCurrentTheme(dark);
      localStorage.setItem('isDarkExist', 'true');
    } else {
      setCurrentTheme(light);
      localStorage.setItem('isDarkExist', 'false');
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Header isHomePage={isHomePage} changeCurrentTheme={changeCurrentTheme} />

      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Providers;
