import React, { ReactElement } from 'react';
import { PageContainer } from '../styles/about-page';
import { Resume } from '../components/resume';
import { aboutPageData } from '../mocks/about';

interface IAbout {
  data: any;
}

const About = ({ data }: IAbout): ReactElement => {
  return (
    <PageContainer>
      <Resume data={data} />
    </PageContainer>
  );
};

About.getInitialProps = async () => {
  return { data: aboutPageData };
};

export default About;
