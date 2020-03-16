import baseStyled, { css, ThemedStyledInterface } from 'styled-components';

const sizes: ISize = {
  desktop: 1167,
  tablet: 778,
  phone: 576,
};

interface ISize {
  [key: string]: number;
}

const defaultTheme = {
  colors: {
    pink: '#EF85A7',
    yellow: '#dfb333',
    blue: '#46C1DA',
    purple: '#9158FB',
    green: '#4DE1C4',
  },
};

const light = {
  highlight: defaultTheme.colors.blue,
  bg: '#E2E3E9',
  fg: '#F7F8F9',
  contrast: '#3F4948',
};

const dark: Theme = {
  highlight: defaultTheme.colors.purple,
  bg: '#282c34',
  fg: 'rgba(darken(#282c34, 5%), 0.5)',
  contrast: '#F2F3FA',
};

export type Theme = typeof light;

// TODO: figure out how to fix proper typing
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export { light, dark };
