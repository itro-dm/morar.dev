import * as styledComponents from 'styled-components';
import { Theme } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  ThemeConsumer,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ServerStyleSheet, ThemeConsumer };

export default styled;
