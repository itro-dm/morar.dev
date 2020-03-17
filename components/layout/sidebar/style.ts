import styled from '../../../styles/themed-components';

export const Wrapper = styled.aside`
  background: #fff;
  padding-bottom: 40px;
  padding-right: 24px;
  max-width: 280px;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  flex-shrink: 0;

  @media screen and (max-width: 950px) {
    border-right: 0;
    display: none;
    left: 0;
    padding: 40px 24px;
    right: 0;
    width: 100%;

    .sidebar.active {
      display: block;
    }
  }
`;
