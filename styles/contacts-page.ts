import styled from './themed-components';
import { Devices } from './media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);

  ${Devices.tablet} {
    flex-direction: row;
  }
`;

export const Item = styled.div`
  margin-right: 2rem;
  display: flex;
  align-items: center;
  font-size: 2rem;

  span {
    display: none;
    color: ${({ theme }) => theme.linkColor};

    ${Devices.tablet} {
      display: inline-block;
    }
  }

  svg {
    fill: ${({ theme }) => theme.accents7};
    height: 8rem;
    width: 8rem;

    ${Devices.tablet} {
      height: 2rem;
      width: 2rem;
      margin-right: 0.5rem;
    }
  }

  a {
    color: ${({ theme }) => theme.linkColor};
  }
`;
