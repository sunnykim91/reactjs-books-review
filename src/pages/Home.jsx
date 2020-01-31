import React, { useEffect, useState } from 'react';
import withAuth from '../hocs/withAuth';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { Layout } from 'antd';
import bgBook from '../images/bg_book.jpg';

const { Content } = Layout;

const StyleImg = styled.img`
  width: 500px;
  height: 80vh;
`;

const Home = ({ token }) => {
  console.log(token);

  return (
    <Layout>
      <Navigation />
      <Content style={{ padding: '50px', background: 'lavenderblush' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <StyleImg src={bgBook} />
          hello
        </div>
      </Content>
    </Layout>
  );
};

export default withAuth(Home);
