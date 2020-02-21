import React, { useState, useEffect, useContext } from 'react';
import withAuth from '../hocs/withAuth';
import axios from 'axios';
import { Input, Button } from 'antd';
import { BookListContext } from '../pages/BookList';
import './AddBook.css';

const AddBook = ({ token }) => {
  const contextValue = useContext(BookListContext);

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const onClickaddBook = async () => {
    let data = {
      title: title,
      message: message,
      author: author,
      url: url
    };
    const response = await axios.post('https://api.marktube.tv/v1/book', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (response.status === 200) {
      contextValue.getBookList();
    }
    contextValue.setIsAddbookFormOpen(!contextValue.isAddbookFormOpen);
  };

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  const handleMessage = e => {
    setMessage(e.target.value);
  };
  const handleAuthor = e => {
    setAuthor(e.target.value);
  };
  const handleURL = e => {
    setUrl(e.target.value);
  };

  useEffect(() => {}, [contextValue.books]);

  return (
    <div className='addBookModal'>
      책 제목 : <Input value={title} onChange={handleTitle} />책 설명 :{' '}
      <Input.TextArea value={message} onChange={handleMessage} />
      책 저자 : <Input value={author} onChange={handleAuthor} />
      책 이미지 : <Input value={url} onChange={handleURL} />
      <Button onClick={onClickaddBook}>책 추가</Button>
    </div>
  );
};

export default withAuth(AddBook);
