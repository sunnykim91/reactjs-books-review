import React, { useEffect } from 'react';
import { Icon, List } from 'antd';

const Books = ({ token, books, getBooks, error, loading, deleteBook }) => {
  const removeBook = async bookId => {
    await deleteBook(token, bookId);
  };

  useEffect(() => {
    getBooks(token);
  }, [token, getBooks]);

  if (error !== null) {
    return <div>에러다</div>;
  }

  return (
    <>
      {loading && <p>로딩 중...</p>}
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
              <Icon type='delete' onClick={() => removeBook(book.bookId)} />
            </div>
          </List.Item>
        )}
      />
    </>
  );
};

export default Books;
