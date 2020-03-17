import React, { ReactNode } from 'react';
import { Wrapper } from './style';
import Link from 'next/link';

type Props = {};

interface ILinkWrapper {
  href: string;
  children: ReactNode;
}

export const Sidebar = (props: Props) => {
  const LinkWrapper = ({ href, ...props }: ILinkWrapper) => (
    <Link href={href} passHref>
      <a {...props} />
    </Link>
  );

  return (
    <Wrapper>
      <nav>
        <ul>
          <LinkWrapper href={'/about'}>
            <li>About me</li>
          </LinkWrapper>
          <LinkWrapper href={'/knowledge'}>
            <li>What I known</li>
          </LinkWrapper>
          <LinkWrapper href={'/portfolio'}>
            <li>What I did</li>
          </LinkWrapper>
          <LinkWrapper href={'/contacts'}>
            <li>Contacts</li>
          </LinkWrapper>
        </ul>
      </nav>
    </Wrapper>
  );
};
