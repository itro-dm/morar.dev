import React from 'react';
import { NextPage } from 'next';
import { Card, Col, Dashboard, HomePage, LogoImg } from '../components/style';

const Home: NextPage<{ userAgent: string }> = () => (
  <HomePage>
    <Dashboard>
      <Col>
        <Card className="flat small">
          <h1>
            <LogoImg
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt="Logo"
            />
          </h1>
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
