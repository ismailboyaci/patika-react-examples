import React from "react";
import BookItem from "../BookItem/BookItem";
import "./BookList.css";

const BookList = ({ booksData }) => {
  return (
    // Container for the book list
    <div className="bookList-container">
      {/* Map through each book item and render the BookItem component */}
      {booksData.map((bookItem) => (
        // Use the BookItem component with the book data and a unique key
        <BookItem key={bookItem.id} bookData={bookItem} />
      ))}
    </div>
  );
};

export default BookList;
