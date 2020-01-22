import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import withAuth from '../hocs/withAuth';
import { Layout } from 'antd';
import AddBook from '../components/AddBook';

const { Content } = Layout;
export const BookListContext = createContext(null);

const BookList = ({ token }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBookList();
  }, [token]);

  const getBookList = () => {
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
  };

  const contextValue = {
    books,
    getBookList
  };

  return (
    <BookListContext.Provider value={contextValue}>
      <Navigation />
      <Content style={{ padding: '50px', marginTop: 64 }}>
        <AddBook />
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <ul>
            {books.map(book =>
              book.title === '' ? (
                ''
              ) : (
                <li key={book.id}>
                  {book.title}
                  {book.message}
                  {book.author}
                </li>
              )
            )}
          </ul>
        </div>
      </Content>
    </BookListContext.Provider>
  );
};

export default withAuth(BookList);
