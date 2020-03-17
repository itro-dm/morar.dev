import baseStyled, { ThemedStyledInterface } from 'styled-components';

// const sizes: ISize = {
//   desktop: 1167,
//   tablet: 778,
//   phone: 576,
// };
//
// interface ISize {
//   [key: string]: number;
// }

const defaultTheme = {
  colors: {
    pink: '#EF85A7',
    yellow: '#dfb333',
    blue: '#46C1DA',
    purple: '#9158FB',
    violet: '#7928ca',
    purpleNext: '#f81ce5',
    green: '#4DE1C4',
    cyan: '#79ffe1',
    alert: '#ff0080',
    gray: '#fafbfc',
  },
  sizes: {
    fontPrimary: '1rem',
    fontSmall: '0.875rem',
  },
};

const light = {
  all: { ...defaultTheme },
  foreground: '#000',
  background: '#fff',
  accents1: '#fafafa',
  accents2: '#eaeaea',
  accents3: '#999999',
  accents4: '#888888',
  accents5: '#666666',
  accents6: '#444444',
  accents7: '#333333',
  accents8: '#111111',
  success: '#0070f3',
  successLight: '#3291ff',
  successDark: '#0366d6',
  error: '#ee0000',
  errorLight: '#ff1a1a',
  errorDark: '#cc0000',
  warningLight: '#f7b955',
  warning: '#f5a623',
  warningDark: '#f49b0b',
  shadowSmall: '0 5px 10px rgba(0, 0, 0, 0.12)',
  shadowMedium: '0 8px 30px rgba(0, 0, 0, 0.12)',
  shadowLarge: '0 30px 60px rgba(0, 0, 0, 0.12)',
  shadowHover: '0 30px 60px rgba(0, 0, 0, 0.12)',
  shadowSticky: '0 12px 10px -10px rgba(0, 0, 0, 0.12)',
  portalOpacity: '0.25',
  secondaryLight: '#999999',
  secondary: '#666666',
  secondaryDark: '#333333',
  code: '#f81ce5',
  selection: '#79ffe1',
  linkColor: '#0070f3',
};

const dark: Theme = {
  all: { ...defaultTheme },
  foreground: '#fff',
  background: '#000',
  accents8: '#fafafa',
  accents7: '#eaeaea',
  accents6: '#999999',
  accents5: '#888888',
  accents4: '#666666',
  accents3: '#444444',
  accents2: '#333333',
  accents1: '#111111',
  successLight: '#3291ff',
  success: '#0070f3',
  successDark: '#0366d6',
  errorLight: '#ff3333',
  error: '#ff0000',
  errorDark: '#e60000',
  warningLight: '#f7b955',
  warning: '#f5a623',
  warningDark: '#f49b0b',
  portalOpacity: '0.75',
  shadowSmall: '0 0 0 1px #444444',
  shadowMedium: '0 0 0 1px #333333',
  shadowLarge: '0 0 0 1px #333333',
  shadowSticky: '0 0 0 1px #333333',
  shadowHover: '0 0 0 1px #fff',
  secondaryLight: '#444',
  secondary: '#888888',
  secondaryDark: '#eaeaea',
  selection: '#f81ce5',
  linkColor: '#fff',
  code: '#79ffe1',
};

export type Theme = typeof light;

// TODO: figure out how to fix proper typing
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export { light, dark, defaultTheme };
