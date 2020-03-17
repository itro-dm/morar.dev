import React from 'react';
import { Wrapper } from './style';
import Link from 'next/link';

interface ICard {
  title: string;
  link: string;
  size?: 'default' | 'small' | 'large' | 'xlarge';
}

const Card = ({ title, link, size = 'default' }: ICard) => {
  return (
    <Wrapper size={size}>
      <Link href={link}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
    </Wrapper>
  );
};

export { Card };
