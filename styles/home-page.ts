import styled from './themed-components';

export const HomePageWrapper = styled.div`
  display: block;
  height: calc(100vh + 40px);

  ${({ theme }) => theme.all.devices.desktop`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 100%;
    height: 100%;

    // height: calc(100vh - 60px);
    overflow-y: hidden;
    justify-content: space-evenly;
  `};
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  ${({ theme }) => theme.all.devices.laptop`
    margin-bottom: 0;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  `};
`;

export const AvatarWrapper = styled.div`
  text-align: center;

  svg {
    height: 250px;
    width: 250px;
    fill: ${({ theme }) => theme.accents8};

    ${({ theme }) => theme.all.devices.tablet`
      height: 275px;
      width: 275px;
    `};

    ${({ theme }) => theme.all.devices.laptop`
      height: 300px;
      width: 300px;
    `};
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;

  ${({ theme }) => theme.all.devices.laptop`
    margin-bottom: 0;
  `};
`;

export const Intro = styled.div`
  color: ${({ theme }) => theme.accents8};
  text-align: center;

  p {
    ${({ theme }) => theme.all.devices.tablet`
      font-size: 1.125rem;
    `};
  }
`;

export const IntroTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  h1 {
    display: flex;
    align-items: center;
    font-size: 1.5rem;

    ${({ theme }) => theme.all.devices.tablet`
      font-size: 2.5rem;
    `};
  }

  svg {
    margin-left: 1.5rem;
    height: 40px;
    width: 40px;

    ${({ theme }) => theme.all.devices.tablet`
      margin-left: 0.5rem;
      height: 50px;
      width: 50px;

    `};
  }
`;

export const Number = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.accents6};

  ${({ theme }) => theme.all.devices.tablet`
    font-size: 1.5rem;
  `};

  ${({ theme }) => theme.all.devices.laptop`
    font-size: 2rem;
  `};
`;

export const Text = styled.span`
  font-size: 2rem;
  text-transform: lowercase;
  color: ${({ theme }) => theme.accents8};
  position: relative;

  ${({ theme }) => theme.all.devices.tablet`
    font-size: 3rem;
  `};

  ${({ theme }) => theme.all.devices.laptop`
    font-size: 7rem;
  `};

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 14px;
    top: 50%;
    margin-top: -0.5px;
    background: ${({ theme }) => theme.all.colors.blue};
    transition: width 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
`;

export const Label = styled.span`
  font-size: 0.825rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accents5};

  ${({ theme }) => theme.all.devices.tablet`
    font-size: 1rem;
  `};
`;

export const StyledLink = styled.a`
  border-bottom: 1px solid ${({ theme }) => theme.accents6};

  @media (hover: hover) {
    &:hover {
      ${Text} {
        &::before {
          width: 100%;
        }
      }
    }
  }
`;
