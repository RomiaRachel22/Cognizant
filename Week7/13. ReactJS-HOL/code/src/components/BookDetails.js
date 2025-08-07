// src/components/BookDetails.js
import React from "react";

const BookDetails = ({ books }) => {
  return books.length > 0 ? (
    <div>
      <h1>Book Details</h1>
      <ul>
        {books.map((book) =>
          book.price > 0 ? (
            <li key={book.id}>
              <h3>{book.bname}</h3>
              <h4>{book.price}</h4>
            </li>
          ) : null // Conditional rendering inside .map()
        )}
      </ul>
    </div>
  ) : (
    <p>No Books Available</p> // Ternary operator
  );
};

export default BookDetails;
