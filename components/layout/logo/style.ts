import styled from '../../../styles/themed-components';

export const LogoWrapper = styled.div`
  position: absolute;
  top: 0;

  ${({ theme }) => theme.all.devices.tablet`
    position: static;
  `};
`;

export const Circle = styled.span`
  width: 2rem;
  height: 2rem;
  margin: 8px;
  display: block;
  background-color: ${({ theme }) => theme.accents8};
  border-radius: 100%;
  transition: 0.3s;
  pointer-events: none;

  ${({ theme }) => theme.all.devices.laptop`
    pointer-events: auto;
  `};

  &:hover {
    transform: scale(1.5);
  }
`;
