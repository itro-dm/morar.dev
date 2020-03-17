import React from 'react';
import { Card } from '../components/card';
import { Column, HomePageWrapper, Intro } from '../styles/home-page';
import { WavingIcon } from '../components/icons/waving';

const Index = () => {
  return (
    <HomePageWrapper>
      <Column>
        <Intro>
          <h1>
            Hi there! I'm Dmitry Morar <WavingIcon />
          </h1>
          <p>I'm a font-end developer, who wants to make world a better place!</p>
        </Intro>
        <Card title="About me" link="/about" />
      </Column>
      <Column>
        <Card title="Cat" link="/" />
        <Card title="Cat" link="/" />
      </Column>
      <Column>
        <Card title="Cat" link="/" />
        <Card title="Cat" link="/" />
      </Column>
    </HomePageWrapper>
  );
};

export default Index;
