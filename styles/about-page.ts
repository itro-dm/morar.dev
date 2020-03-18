import styled from './themed-components';
import { Container } from './grid';

export const PageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  padding-bottom: 64px;
  margin-left: auto;
  max-width: calc(100% - 150px);
  padding-left: 24px;

  @media screen and (max-width: 950px) {
    padding-left: 0;
    margin-left: 0;
    max-width: 100%;
  }

`;
