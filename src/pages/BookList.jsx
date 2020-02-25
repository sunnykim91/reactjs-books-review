import React from "react";
import BooksContainer from "../container/BooksContainer";
import "./BookList.css";

const BookList = ({ token }) => {
  return (
    <>
      <BooksContainer token={token} />
    </>
  );
};

export default BookList;
