import { NextPage } from 'next';
import React from 'react';
import { TestCase } from '../components/style';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <TestCase>Hello world! - user agent: {userAgent}</TestCase>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
