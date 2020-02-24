import React, { useState, useEffect, useCallback } from "react";
import Navigation from "../components/Navigation";
import withAuth from "../hocs/withAuth";
import { Layout, Icon, Button, Modal, List } from "antd";
import AddBook from "../components/AddBook";
import "./BookList.css";
import RequestService from "../service/RequestService";
import ModifyBook from "../components/ModifyBook";
import { connect } from "react-redux";
import {
  setBooks,
  startLoading,
  endLoading,
  setError,
  clearError
} from "../actions/index";

const { Content } = Layout;

const BookList = ({
  token,
  books,
  setBooks,
  loading,
  startLoading,
  endLoading,
  setError,
  clearError
}) => {
  const [isAddbookFormOpen, setIsAddbookFormOpen] = useState(false);
  const [isModifybookFormOpen, setIsModifybookFormOpen] = useState(false);
  const [visible] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const getBookList = useCallback(() => {
    startLoading();
    clearError();
    try {
      RequestService.getBooks(token).then(res => {
        setBooks(res.data);
        endLoading();
      });
    } catch (error) {
      setError(error);
      endLoading();
    }
  }, [clearError, endLoading, setBooks, setError, startLoading, token]);

  // const removeBook = id => {
  //   RequestService.deleteBook(token, id).then(
  //     setBooks(books.filter(book => book.bookId !== id))
  //   );
  // };

  const modifyBook = id => {
    setIsModifybookFormOpen(!isModifybookFormOpen);
    setTargetId(id);
  };

  useEffect(() => {
    getBookList();
  }, [getBookList, token]);

  return (
    <>
      <Navigation />
      <Content
        style={{
          padding: "50px",
          background: "lavenderblush"
        }}
      >
        {isAddbookFormOpen ? (
          <Modal
            title="책 추가하기"
            visible={!visible}
            bodyStyle={{ background: "lavenderblush" }}
            footer={null}
            onCancel={() => setIsAddbookFormOpen(!isAddbookFormOpen)}
          >
            <AddBook />
          </Modal>
        ) : null}
        {isModifybookFormOpen ? (
          <Modal
            title="책 수정하기"
            visible={!visible}
            bodyStyle={{ background: "lavenderblush" }}
            footer={null}
            onCancel={() => setIsModifybookFormOpen(!isModifybookFormOpen)}
          >
            <ModifyBook />
          </Modal>
        ) : null}
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          <div className="addBookBtn">
            <Button onClick={() => setIsAddbookFormOpen(!isAddbookFormOpen)}>
              책 추가하기
            </Button>
          </div>
          {loading ? (
            "loading..."
          ) : (
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                pageSize: 5
              }}
              dataSource={books}
              footer={
                <div className="footer">
                  개발 서적 평가 서비스 <b>by Sunnykim</b>
                </div>
              }
              renderItem={book => (
                <List.Item
                  key={book.bookId}
                  extra={<img width={100} alt="logo" src={book.url} />}
                >
                  <List.Item.Meta title={book.title} />
                  <div className="author">저자 : {book.author}</div>
                  <div className="description">설명 : {book.message}</div>
                  <div className="textEditDeleteBtn">
                    <Icon
                      type="edit"
                      className="editBtn"
                      onClick={() => modifyBook(book.bookId)}
                    />
                    <Icon type="delete" />
                  </div>
                </List.Item>
              )}
            />
          )}
        </div>
      </Content>
    </>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => {
    dispatch(setBooks(books));
  },
  startLoading: () => {
    dispatch(startLoading());
  },
  endLoading: () => {
    dispatch(endLoading());
  },
  setError: error => {
    dispatch(setError());
  },
  clearError: () => {
    dispatch(clearError());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(BookList));
