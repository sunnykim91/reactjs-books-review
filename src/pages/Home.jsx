import React from 'react';
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

// const StyleDiv = styled.div``;

const Home = ({ token }) => {
  return (
    <Layout>
      <Navigation />
      <Content style={{ padding: '50px', background: 'lavenderblush' }}>
        <div
          style={{
            background: '#fff',
            padding: 24,
            minHeight: 380,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <StyleImg src={bgBook} />
          <div style={{ fontSize: '20px' }}>Sunny의 개발서적 리스트입니다.</div>
        </div>
      </Content>
    </Layout>
  );
};

export default withAuth(Home);
