import styled from './themed-components';

export const HomePageWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: hidden;
  justify-content: space-evenly;
`;

export const Top = styled.div``;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Intro = styled.div`
  color: ${({ theme }) => theme.accents8};

  h1 {
    display: flex;
    align-items: center;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

export const Number = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.accents6};
`;

export const Text = styled.span`
  font-size: 7rem;
  text-transform: lowercase;
  color: ${({ theme }) => theme.accents8};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 0%;
    height: 14px;
    top: 50%;
    margin-top: -0.5px;
    background: ${({ theme }) => theme.all.colors.blue};
    transition: width 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
`;

export const Label = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accents5};
`;

export const StyledLink = styled.a`
  border-bottom: 1px solid ${({ theme }) => theme.accents6};
  &:hover {
    ${Text} {
      &::before {
        width: 100%;
      }
    }
  }
`;
