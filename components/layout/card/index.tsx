import React from 'react';
import { StyledCard } from './style';

type Props = {};

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export { Card };
