import React from "react";
import './BookCounter.css';
const BookCounter = (props) => {
  return (
    <main>
      <h2>{props.library.name}'s Books</h2>
      <button onClick={() => props.refreshBooks()}>Refresh Books</button>
      <ul>
      {props.library.books.map((book) => (
        <li>{book.title}</li>
      ))}
      </ul>
    </main>
  );
};
export default BookCounter;
