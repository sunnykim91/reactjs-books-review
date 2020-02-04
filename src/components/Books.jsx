import React, { useEffect } from 'react';
import { Icon, Button, Modal, List } from 'antd';

const Books = ({ token, books, setBooks }) => {
  useEffect(() => {
    setBooks(token);
  }, [token, setBooks]);

  return (
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
            <Icon type='edit' className='editBtn' />
            {/* <Icon type='delete' onClick={() => removeBook(book.bookId)} /> */}
          </div>
        </List.Item>
      )}
    />
  );
};

export default Books;
