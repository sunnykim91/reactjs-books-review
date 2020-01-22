import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import './Navigation.css';
import { useHistory } from 'react-router-dom';

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

  return (
    <Header style={{ width: '100%', padding: '0px' }}>
      <Menu
        theme='light'
        mode='horizontal'
        style={{ lineHeight: '64px', padding: '0px' }}
        onClick={handleOnClick}
      >
        <Menu.Item key='1'>Home</Menu.Item>
        <Menu.Item key='2'>책 목록</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navigation;
