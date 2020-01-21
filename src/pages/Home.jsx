import React, { useEffect, useState } from 'react';
import withAuth from '../hocs/withAuth';
import axios from 'axios';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { Layout } from 'antd';
import bgBook from '../images/bg_book.jpg';

const { Content, Footer } = Layout;

const StyleImg = styled.img`
  width: 500px;
  height: 80vh;
`;

const StyleDiv = styled.div``;

const Home = ({ token }) => {
  console.log(token);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res);
        setBooks(res.data);
      });
  }, [token]);
  return (
    <Layout>
      <Navigation />
      <Content style={{ padding: '50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <StyleImg src={bgBook} />
        </div>
      </Content>
    </Layout>
  );
};

export default withAuth(Home);
