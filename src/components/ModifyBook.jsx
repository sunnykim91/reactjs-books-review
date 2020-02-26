import React, { useState, useEffect } from "react";
import withAuth from "../hocs/withAuth";
import { Input, Button } from "antd";
import "./AddBook.css";

const ModifyBook = ({
  token,
  isModifybookFormOpen,
  setIsModifybookFormOpen,
  targetId,
  books,
  modifyBook
}) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const onClickModifyBook = async () => {
    let book = {
      title: title,
      message: message,
      author: author,
      url: url
    };
    await modifyBook(token, targetId, book);
    setIsModifybookFormOpen(!isModifybookFormOpen);
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

  useEffect(() => {
    setTitle(books.filter(book => book.bookId === targetId)[0].title);
    setMessage(books.filter(book => book.bookId === targetId)[0].message);
    setAuthor(books.filter(book => book.bookId === targetId)[0].author);
    setUrl(books.filter(book => book.bookId === targetId)[0].url);
  }, [books, targetId]);

  return (
    <div className="addBookModal">
      책 제목 : <Input value={title} onChange={handleTitle} />책 설명 :{" "}
      <Input.TextArea value={message} onChange={handleMessage} />책 저자 :{" "}
      <Input value={author} onChange={handleAuthor} />
      책 이미지 : <Input value={url} onChange={handleURL} />
      <Button onClick={onClickModifyBook}>책 수정</Button>
    </div>
  );
};

export default withAuth(ModifyBook);
