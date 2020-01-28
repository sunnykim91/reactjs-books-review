import React, { useState, useEffect, createContext, useCallback } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import withAuth from '../hocs/withAuth';
import { Layout, Icon, Button, Modal, List } from 'antd';
import AddBook from '../components/AddBook';
import './BookList.css';

const { Content } = Layout;
export const BookListContext = createContext(null);

const BookList = ({ token }) => {
  const [books, setBooks] = useState([]);
  const [isAddbookFormOpen, setIsAddbookFormOpen] = useState(false);
  const [visible] = useState(false);

  const getBookList = useCallback(() => {
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

  const contextValue = {
    isAddbookFormOpen,
    setIsAddbookFormOpen,
    books,
    getBookList
  };

  const removeBook = id => {
    axios
      .delete(`https://api.marktube.tv/v1/book/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(setBooks(books.filter(book => book.bookId !== id)));
  };

  const modifyBook = id => {
    console.log(id);
  };

  useEffect(() => {
    getBookList();
  }, [getBookList, token]);

  return (
    <BookListContext.Provider value={contextValue}>
      <Navigation />
      <Content
        style={{
          padding: '50px',
          background: 'lavenderblush'
        }}
      >
        {isAddbookFormOpen ? (
          <Modal
            title='책 추가하기'
            visible={!visible}
            bodyStyle={{ background: 'lavenderblush' }}
            footer={null}
            onCancel={() => setIsAddbookFormOpen(!isAddbookFormOpen)}
          >
            <AddBook />
          </Modal>
        ) : null}
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <div className='addBookBtn'>
            <Button onClick={() => setIsAddbookFormOpen(!isAddbookFormOpen)}>
              책 추가하기
            </Button>
          </div>
          <List
            itemLayout='vertical'
            size='large'
            pagination={{
              pageSize: 5
            }}
            dataSource={books}
            footer={
              <div className='footer'>
                개발 서적 평가 서비스 <b>by Sunnykim</b>
              </div>
            }
            renderItem={book => (
              <List.Item
                key={book.bookId}
                extra={<img width={100} alt='logo' src={book.url} />}
              >
                <List.Item.Meta title={book.title} />
                <div className='author'>저자 : {book.author}</div>
                <div className='description'>설명 : {book.message}</div>
                <div className='textEditDeleteBtn'>
                  <Icon
                    type='edit'
                    className='editBtn'
                    onClick={() => modifyBook(book.bookId)}
                  />
                  <Icon type='delete' onClick={() => removeBook(book.bookId)} />
                </div>
              </List.Item>
            )}
          />
        </div>
      </Content>
    </BookListContext.Provider>
  );
};

export default withAuth(BookList);
