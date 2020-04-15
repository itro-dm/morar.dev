import React, { ReactNode } from 'react';
import {
  HomePageWrapper,
  Intro,
  Number,
  Text,
  StyledLink,
  Label,
  Top,
  Bottom,
  AvatarWrapper,
} from '../styles/home-page';
import { WavingIcon } from '../components/icons/waving';
import { Container } from '../styles/grid';
import Link from 'next/link';
import { Avatar } from '../components/icons/avatar';

interface ILinkWrapper {
  href: string;
  children: ReactNode;
}

const Index = () => {
  const LinkWrapper = ({ href, ...props }: ILinkWrapper) => (
    <Link href={href} passHref>
      <StyledLink {...props} />
    </Link>
  );

  return (
    <Container>
      <HomePageWrapper>
        <Top>
          <AvatarWrapper>
            <Avatar />
          </AvatarWrapper>
          <Intro>
            <h1>
              Hi there! I'm Dmitry Morar <WavingIcon />
            </h1>
            <p>I'm a font-end developer, who wants to make world a better place!</p>
          </Intro>
        </Top>
        <Bottom>
          <LinkWrapper href="/about">
            <Number>00.</Number>
            <Text>About</Text>
          </LinkWrapper>
          <StyledLink
            href="https://www.notion.so/DevWiki-ca55469a791e4a77968cfd48c7c0c0fb"
            target="_blank">
            <Number>01.</Number>
            <Text>What I know</Text>
          </StyledLink>
          <LinkWrapper href="/">
            <Number>02.</Number>
            <Text>What I did</Text>
            <Label>(soon)</Label>
          </LinkWrapper>
          <LinkWrapper href="/contacts">
            <Number>03.</Number>
            <Text>Contacts</Text>
          </LinkWrapper>
        </Bottom>
      </HomePageWrapper>
    </Container>
  );
};

export default Index;
