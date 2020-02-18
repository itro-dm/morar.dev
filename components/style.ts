import styled from 'styled-components';

const colors = {
  pink: '#EF85A7',
  yellow: '#dfb333',
  blue: '#46C1DA',
  purple: '#9158FB',
  green: '#4DE1C4',
};

const themes = {
  light: {
    highlight: colors.blue,
    bg: '#E2E3E9',
    fg: '#F7F8F9',
    contrast: '#3F4948',
  },
  dark: {
    highlight: colors.purple,
    bg: '#282c34',
    fg: 'rgba(darken(#282c34, 5%), 0.5)',
    contrast: '#F2F3FA',
  },
  darkDark: {
    highlight: colors.green,
    bg: 'darken(#282c34, 4%)',
    fg: 'rgba(darken(#1e1f26, 2%), 0.7)',
    contrast: '#F2F3FA',
  },
};

const type = {
  hsize1: '40px',
  hsize2: '28px',
  hsize3: '24px',
  psize: '16px',
};

export const HomePage = styled.main`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    background: ${themes.light.bg};
    font-size: 14px;
  }
  body {
    font-family: 'Roboto', 'Franklin Gothic Medium', Tahoma, sans-serif;
    line-height: 1.5;
    height: 100%;
    font-size: 1rem;

    @media screen and (min-width: 960px) {
      height: 100vh;
      border: 1.5rem solid ${themes.light.fg};
      overflow: hidden;
    }
  }

  h1,
  h2,
  h3,
  p,
  li,
  ul {
    margin: 0 0 1.5rem;
    color: ${themes.light.contrast};
  }

  h1 {
    font-size: ${type.hsize1};
    font-weight: 900;
    margin: 0;
  }

  h1,
  h2 {
    padding-bottom: 1.5rem;
    position: relative;
    margin: 0;

    &:after {
      content: '';
      height: 0.35rem;
      width: 2.25rem;
      background: ${themes.light.highlight};
      display: block;
      position: absolute;
      bottom: 0.8rem;
      transform: skewX(-15deg);
    }
  }

  h2 {
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  p,
  li {
    line-height: 1.5;
    margin: 0 0 1.5rem;
    opacity: 0.7;
  }

  small {
    opacity: 0.35;
    font-size: 0.8rem;
    line-height: 1.25rem;
    display: block;
    color: ${themes.light.contrast};
  }
`;

export const Highlight = styled.span`
  color: ${themes.light.highlight};
`;

export const Col = styled.div`
  margin: 1.5rem;

  @media screen and (min-width: 960px) {
    height: 100%;
  }
`;

export const Card = styled.div`
  opacity: 0.7;
  width: 100%;
  padding: 0.75rem 1.5rem;
  margin: 0 0 1.5rem;
  background: ${themes.light.fg};
  box-shadow: 1px 2px 12px 2px
      rgba(darken(mix(${themes.light.bg}, ${themes.light.highlight}, 80%), 20%), 0.15),
    3px 8px 8px -2px rgba(darken(mix(${themes.light.fg}, ${themes.light.bg}, 30%), 20%), 0.3);
  transform: translate3d(0, 0, 0);
  transition: all 0.325s ease-in;

  &:hover {
    cursor: pointer;
    opacity: 1;
    box-shadow: 1px 2px 18px 3px
        gba(darken(mix(${themes.light.bg}, ${themes.light.highlight}, 80%), 25%), 0.2),
      4px 9px 12px -1px rgba(darken(mix(${themes.light.fg}, ${themes.light.bg}, 30%), 25%), 0.35);
    transform: translate3d(0, 0, 0) scale(1.025);
  }

  &.flat {
    box-shadow: none;
    background: transparent;
    opacity: 1;
  }
`;

export const LogoImg = styled.img`
  width: 50%;
  height: 50%;
  margin: 0 auto;
  display: block;
`;

export const Dashboard = styled.div`
  display: block;
  overflow-x: scroll;
  background: #e2e3e9;

  @media (min-width: 960px) {
    height: 100vh;
    padding: 3rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns: 5fr 4fr 4fr;
    grid-gap: 1.5rem;

    &::before,
    &::after {
      content: '';
      background: white;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      withd: 100%;
      height: 15rem;
    }

    &::after {
      top: initial;
      bottom: 0;
    }

    ${Col} {
      margin: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: stretch;
      justify-content: space-between;

      ${Card} {
        display: flex;
        flex-flow: column nowrap;
        flex-grow: 2;

        &:last-child {
          margin: 0;
        }

        &.small {
          flex-grow: 1;
        }

        &.large {
          flex-grow: 4;
        }

        &.xl {
          flex-grow: 6;
        }

        small {
          align-self: flex-end;
        }
      }
    }
  }
`;
