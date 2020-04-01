import styled from '../../../styles/themed-components';

export const Circle = styled.span`
  width: 2rem;
  height: 2rem;
  margin: 8px;
  display: block;
  background-color: ${({ theme }) => theme.accents8};
  border-radius: 100%;
  transition: 0.3s;

  &:hover {
    transform: scale(1.5);
  }
`;
