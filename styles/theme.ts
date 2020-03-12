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

const color = {
  blue: '#2054ae',
  pink: '#c43683',
  black: '#24272a',
};

const theme = {
  color,
  media,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
