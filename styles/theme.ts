import baseStyled, { css, ThemedStyledInterface } from 'styled-components';

const sizes: ISize = {
  desktop: 1167,
  tablet: 778,
  phone: 576,
};

interface ISize {
  [key: string]: number;
}

// Iterate through the sizes and create a media template
const media = {
  desktop: (...args: any) => undefined,
  tablet: (...args: any) => undefined,
  phone: (...args: any) => undefined,
};

Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (...args: any) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(args.shift(), ...args)}
    }
  `;
  return acc;
}, media);

const defaultTheme = {
  colors: {
    pink: '#EF85A7',
    yellow: '#dfb333',
    blue: '#46C1DA',
    purple: '#9158FB',
    green: '#4DE1C4',
  },
  media,
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
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export { light, dark };
