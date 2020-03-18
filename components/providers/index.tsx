import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import styled, { ThemeProvider } from '../../styles/themed-components';
import { light, dark, Theme } from '../../styles/theme';

import { Header } from '../layout/header';

interface IProviders {
  children: ReactNode;
}

const Main = styled.main`
  padding-top: 60px;
  background: ${({ theme }) => theme.background};
`;

const Providers = ({ children }: IProviders): ReactElement => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(light);

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
      <Header changeCurrentTheme={changeCurrentTheme} />

      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Providers;
