import styled from 'styled-components';

interface IWrapper {
  size: 'default' | 'small' | 'large' | 'xlarge';
}

const sizeMap = {
  default: 1,
  small: 2,
  large: 4,
  xlarge: 6,
};

export const Wrapper = styled.div<IWrapper>`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.accents2};
  transition: all 0.1s ease-in;
  padding: 0 24px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  color: ${({ theme }) => theme.foreground};
  text-decoration: none;
  width: auto;
  flex-flow: column nowrap;
  flex-grow: ${({ size }) => sizeMap[size]};
  box-shadow: ${({ theme }) => theme.shadowSmall};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowMedium};
    border-color: ${({ theme }) => theme.background};
  }

  & h2 {
    position: relative;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-bottom: 1.5rem;
    margin: 0;

    ::after {
      content: '';
      height: 0.35rem;
      width: 2.25rem;
      background: ${({ theme }) => theme.all.colors.blue};
      display: block;
      position: absolute;
      bottom: 0.8rem;
      transform: skewX(-15deg);
    }
  }
`;
