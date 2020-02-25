import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import withAuth from "../hocs/withAuth";
import { Layout, Icon, Button, Modal, List } from "antd";
import AddBookContainer from "../container/AddBookContainer";

import ModifyBook from "../components/ModifyBook";
const { Content } = Layout;

const Book = ({ token, books, loading, error, requestBooks, deleteBook }) => {
  const [isAddbookFormOpen, setIsAddbookFormOpen] = useState(false);
  const [isModifybookFormOpen, setIsModifybookFormOpen] = useState(false);
  const [visible] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const modifyBook = id => {
    setIsModifybookFormOpen(!isModifybookFormOpen);
    setTargetId(id);
  };

  useEffect(() => {
    requestBooks(token);
  }, [requestBooks, token]);

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
            <AddBookContainer
              setIsAddbookFormOpen={setIsAddbookFormOpen}
              isAddbookFormOpen={isAddbookFormOpen}
              token={token}
            />
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
                    <Icon
                      type="delete"
                      onClick={() => deleteBook(token, book.bookId)}
                    />
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
export default withAuth(Book);
