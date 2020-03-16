import React, { ReactElement } from 'react';
import { Wrapper, Input, Label, Border, Indicator } from './style';

interface IThemeToggle {
  changeCurrentTheme?: () => void;
}

const ThemeToggler = ({ changeCurrentTheme }: IThemeToggle): ReactElement => {
  return (
    <Wrapper>
      <Input type="checkbox" id="toggle-mode-cb" />

      <Label id="toggle-mode" htmlFor="toggle-mode-cb" onClick={changeCurrentTheme}>
        <Border>
          <Indicator />
        </Border>
      </Label>
    </Wrapper>
  );
};

export { ThemeToggler };
