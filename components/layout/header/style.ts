import styled from '../../../styles/themed-components';
import { Container } from '../../../styles/grid';

interface IWrapper {
  isHomePage: boolean;
}

export const Wrapper = styled.header<IWrapper>`
  width: 100%;
  background: ${({ theme }) => theme.background};
  z-index: 10;
  border-bottom: 1px solid ${({ isHomePage }) => (isHomePage ? 'transparent' : '#eaeaea')};
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled.a`
  transition: color 0.2s ease;
  color: ${({ theme }) => theme.accents7};

  &:hover {
    color: ${({ theme }) => theme.foreground};
  }
`;
