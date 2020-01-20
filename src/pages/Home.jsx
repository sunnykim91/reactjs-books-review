import React, { useEffect, useState } from 'react';
import withAuth from '../hocs/withAuth';
import axios from 'axios';

const Home = ({ token }) => {
  console.log(token);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res);
        setBooks(res.data);
      });
  }, [token]);
  return (
    <div>
      <h1>HOME</h1>
      <ul>
        {books.map(book => (
          <li key={book.bookId}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default withAuth(Home);
