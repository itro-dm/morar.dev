import React from 'react';
import { NextPage } from 'next';
import { Card, Col, Dashboard, Highlight, HomePage } from '../components/style';

const Home: NextPage<{ userAgent: string }> = () => (
  <HomePage>
    <Dashboard>
      <Col>
        <Card className="flat small">
          <p>
            excited here, net neutrality syndicated Journal Register shoot a photo hashtag
            curmudgeon 5% corruption analog.
          </p>
          <small>
            This Week in Review content is king engagement Romenesko RSS Wikipedia, data
            visualization advertising privacy discuss
          </small>
        </Card>
        <Card className="xl">
          <h2>Key Indicators</h2>
        </Card>
      </Col>
      <Col>
        <Card className="small">
          <h2>Shoe Size</h2>
        </Card>
        <Card className="large">
          <h2>Demographics</h2>
        </Card>
        <Card>
          <h2>Location</h2>
        </Card>
      </Col>
      <Col>
        <Card>
          <h2>Properties</h2>
        </Card>
        <Card>
          <h2>Directorships</h2>
        </Card>
        <Card className="large">
          <h2>Brand Matches</h2>
        </Card>
      </Col>
    </Dashboard>
  </HomePage>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
