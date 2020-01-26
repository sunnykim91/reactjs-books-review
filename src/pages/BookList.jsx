import React, { useState, useEffect, createContext, useCallback } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import withAuth from "../hocs/withAuth";
import { Layout, Icon, Button, Modal } from "antd";
import AddBook from "../components/AddBook";

const { Content } = Layout;
export const BookListContext = createContext(null);

const BookList = ({ token }) => {
  const [books, setBooks] = useState([]);
  const [isAddbookFormOpen, setIsAddbookFormOpen] = useState(false);
  const [visible] = useState(false);

  const getBookList = useCallback(() => {
    axios
      .get("https://api.marktube.tv/v1/book", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res);
        setBooks(res.data);
      });
  }, [token]);

  useEffect(() => {
    getBookList();
  }, [getBookList, token]);

  const contextValue = {
    isAddbookFormOpen,
    setIsAddbookFormOpen,
    books,
    getBookList
  };

  const removeBook = id => {
    console.log(id);
  };

  return (
    <BookListContext.Provider value={contextValue}>
      <Navigation />
      <div>
        <Button onClick={() => setIsAddbookFormOpen(!isAddbookFormOpen)}>
          책 추가하기
        </Button>
      </div>
      <Content style={{ padding: "50px", marginTop: 64 }}>
        {isAddbookFormOpen ? (
          <Modal
            title="책 추가하기"
            visible={!visible}
            footer={null}
            onCancel={() => setIsAddbookFormOpen(!isAddbookFormOpen)}
          >
            <AddBook />
          </Modal>
        ) : null}
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          <ul>
            {books.map(book =>
              book.title === "" ? (
                ""
              ) : (
                <li key={book.bookId}>
                  {book.title}
                  {book.message}
                  {book.author}
                  <Icon type="delete" onClick={() => removeBook(book.bookId)} />
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
