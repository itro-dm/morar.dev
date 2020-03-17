import styled from '../../../styles/themed-components';
import { Container } from '../../../styles/grid';

export const Wrapper = styled.header`
  width: 100%;
  background: #fff;
  z-index: 10;
  border-bottom: 1px solid #eaeaea;
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
