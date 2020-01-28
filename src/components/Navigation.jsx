import React from 'react';
import { Layout, Menu, Button } from 'antd';
import './Navigation.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const { Header } = Layout;

const Navigation = () => {
  const history = useHistory();

  const handleOnClick = e => {
    console.log(e.key);
    if (e.key === '1') {
      history.push('/');
    } else if (e.key === '2') {
      history.push('/bookList');
    }
  };

  const signOut = async () => {
    console.log('로그아웃');

    try {
      const token = localStorage.getItem('token');
      console.log(token);
      const response = await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      localStorage.removeItem('token');
      if (response.data.success) {
        alert('로그아웃 되었습니다.');
      }
      history.push('/signin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Header style={{ width: '100%', padding: '0px' }}>
      <Menu
        theme='light'
        mode='horizontal'
        style={{
          lineHeight: '64px',
          padding: '0px',
          color: 'hotpink',
          fontSize: 'large',
          background: 'floralwhite'
        }}
        onClick={handleOnClick}
      >
        <Menu.Item key='1' className='menu'>
          Home
        </Menu.Item>
        <Menu.Item key='2'>책 목록</Menu.Item>
      </Menu>
      <Button className='signOutBtn' onClick={() => signOut()}>
        로그아웃
      </Button>
    </Header>
  );
};

export default Navigation;
