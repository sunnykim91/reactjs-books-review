// import React, { useState, useEffect, useContext } from 'react';
// import withAuth from '../hocs/withAuth';
// import { Input, Button } from 'antd';
// import { BookListContext } from '../pages/BookList';
// import RequestService from '../service/RequestService';
// import './AddBook.css';

// const ModifyBook = ({ token }) => {
//   const [title, setTitle] = useState('');
//   const [message, setMessage] = useState('');
//   const [author, setAuthor] = useState('');
//   const [url, setUrl] = useState('');

//   const onClickModifyBook = async () => {
//     let bookInfo = {
//       title: title,
//       message: message,
//       author: author,
//       url: url
//     };
//     const response = await RequestService.editBook(
//       token,
//       targetId,
//       bookInfo
//     );
//     if (response.status === 200) {
//       getBookList();
//     }
//     contextValue.setIsModifybookFormOpen(!.isModifybookFormOpen);
//   };

//   const handleTitle = e => {
//     setTitle(e.target.value);
//   };

//   const handleMessage = e => {
//     setMessage(e.target.value);
//   };
//   const handleAuthor = e => {
//     setAuthor(e.target.value);
//   };
//   const handleURL = e => {
//     setUrl(e.target.value);
//   };

//   useEffect(() => {
//     setTitle(
//       contextValue.books.filter(
//         book => book.bookId === contextValue.targetId
//       )[0].title
//     );
//     setMessage(
//       contextValue.books.filter(
//         book => book.bookId === contextValue.targetId
//       )[0].message
//     );
//     setAuthor(
//       contextValue.books.filter(
//         book => book.bookId === contextValue.targetId
//       )[0].author
//     );
//     setUrl(
//       contextValue.books.filter(
//         book => book.bookId === contextValue.targetId
//       )[0].url
//     );
//   }, [contextValue.books, contextValue.targetId]);

//   return (
//     <div className='addBookModal'>
//       책 제목 : <Input value={title} onChange={handleTitle} />책 설명 :{' '}
//       <Input.TextArea value={message} onChange={handleMessage} />책 저자 :{' '}
//       <Input value={author} onChange={handleAuthor} />
//       책 이미지 : <Input value={url} onChange={handleURL} />
//       <Button onClick={onClickModifyBook}>책 수정</Button>
//     </div>
//   );
// };

// export default withAuth(ModifyBook);
