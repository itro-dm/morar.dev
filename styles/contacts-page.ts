import styled from './themed-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
`;

export const Item = styled.div`
  margin-right: 2rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  span {
    color: ${({ theme }) => theme.accents7};
  }

  svg {
    fill: ${({ theme }) => theme.accents7};
    margin-right: 0.5rem;
    height: 2rem;
    width: 2rem;
  }
  a {
    color: ${({ theme }) => theme.linkColor};
  }
`;
