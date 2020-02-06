import React, { useState } from 'react';
import withAuth from '../hocs/withAuth';
import { Input, Button, message } from 'antd';
import './AddBook.css';

const AddBook = ({
  token,
  addBook,
  visible,
  isAddbookFormOpen,
  setIsAddbookFormOpen
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const onClickaddBook = async () => {
    console.log(addBook);
    console.log(token);
    const book = {
      title: title,
      message: description,
      author: author,
      url: url
    };
    try {
      if (title === '' || description === '' || author === '' || url === '') {
        console.log('hello');
        message.error('빈칸을 채워주세요');
      } else {
        await addBook(token, book);
        setIsAddbookFormOpen(!isAddbookFormOpen);
      }
    } catch {}
  };

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  const handleMessage = e => {
    setDescription(e.target.value);
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
      <Input.TextArea value={description} onChange={handleMessage} />
      책 저자 : <Input value={author} onChange={handleAuthor} />
      책 이미지 : <Input value={url} onChange={handleURL} />
      <Button onClick={onClickaddBook}>책 추가</Button>
    </div>
  );
};

export default withAuth(AddBook);
