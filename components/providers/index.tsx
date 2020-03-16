import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { light, dark, Theme } from '../../styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { Header } from '../layout/header';

interface IProviders {
  children: ReactNode;
}

const Main = styled.main`
  padding-top: 60px;
`;

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
      <Header changeCurrentTheme={changeCurrentTheme} />

      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Providers;
