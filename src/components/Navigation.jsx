import React from 'react';
import { Layout, Menu } from 'antd';
import './Navigation.css';
import { Link } from 'react-router-dom';
import BookList from './BookList';

const { Header } = Layout;

const Navigation = () => {
  return (
    <div>
      <Header
        style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0px' }}
      >
        <Menu
          theme='light'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', padding: '0px' }}
        >
          <Menu.Item key='1'>Home</Menu.Item>
          <Link to='/booklist' component={BookList}>
            <Menu.Item key='2'>책 목록</Menu.Item>
          </Link>
        </Menu>
      </Header>
    </div>
  );
};

export default Navigation;
