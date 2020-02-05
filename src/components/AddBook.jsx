import React, { useState } from 'react';
import withAuth from '../hocs/withAuth';
import { Input, Button } from 'antd';
import './AddBook.css';

const AddBook = ({ token, addBook }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const onClickaddBook = async () => {
    console.log(addBook);
    console.log(token);
    const book = {
      title: title,
      message: message,
      author: author,
      url: url
    };
    try {
      await addBook(token, book);
    } catch {}
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
