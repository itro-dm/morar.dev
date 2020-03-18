import styled from './themed-components';

const breakpoints = {
  xxs: '20em', // 320px
  xs: '30em', // 480px
  sm: '48em', // 768px
  md: '62em', // 992px
  xmd: '64em', // 1024px
  lg: '75em', // 1200px
  xl: '90em', // 1440px
  xxl: '120em', // 1920px
  xxxl: '140em', // 2240px
};

const media = {
  xxs: `(min-width: ${breakpoints.xxs})`, // 320px
  xs: `(min-width: ${breakpoints.xs})`, // 480px
  sm: `(min-width: ${breakpoints.sm})`, // 768px
  md: `(min-width: ${breakpoints.md})`, // 992px
  xmd: `(min-width: ${breakpoints.xmd})`, // 1024px
  lg: `(min-width: ${breakpoints.lg})`, // 1200px
  xl: `(min-width: ${breakpoints.xl})`, // 1440px
  xxl: `(min-width: ${breakpoints.xxl})`, // 1920px
  xxxl: `(min-width: ${breakpoints.xxxl})`, // 2240px
};

export const Container = styled.div`
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  outline: 0;
  padding-right: 16px;
  padding-left: 16px;

  @media ${media.sm} {
    width: 752px;
  }

  @media ${media.md} {
    width: 992px;
  }

  @media ${media.lg} {
    width: 1024px;
  }

  @media ${media.xl} {
    width: 1212px;
  }

  @media ${media.xxl} {
    width: 1400px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
`;
