import React, { useState } from "react";
import "./BookItem.css";

const BookItem = ({ bookData }) => {
  // State to manage the visibility of the book description
  const [openDesc, setOpenDesc] = useState(false);

  // Function to open the book preview URL in a new window
  const openUrl = (url) => {
    window.open(url);
  };

  // Function to toggle the visibility of the book description
  const changeDescState = () => {
    setOpenDesc(!openDesc);
  };

  try {
    if (!bookData || !bookData.volumeInfo) {
      throw new Error("Invalid book data");
    }

    return (
      <div className="bookItem-container">
        {/* Conditionally render the book image or description based on the openDesc state */}
        {!openDesc ? (
          <div className="bookItem-img">
            <img
              src={bookData.volumeInfo.imageLinks.smallThumbnail}
              alt={bookData.volumeInfo.title}
            />
          </div>
        ) : (
          <div>
            {/* Render the book description when openDesc is true */}
            <p className="bookItem-description">
              {bookData.volumeInfo.description}
            </p>
          </div>
        )}
        <div className="bookItem-buttons-container">
          {/* Button to preview the book */}
          <button
            className="bookItem-button"
            onClick={() => openUrl(bookData.volumeInfo.previewLink)}
          >
            Preview
          </button>
          <hr />
          {/* Button to toggle the visibility of the book description */}
          <button className="bookItem-button" onClick={changeDescState}>
            Details
          </button>
        </div>
        <div className="bookItem-info-container">
          <div className="width-75">
            <hr />
          </div>
          <div>
            {/* Book title */}
            <p>{bookData.volumeInfo.title}</p>
          </div>
          <div className="width-75">
            <hr />
          </div>
          {/* Authors */}
          {bookData.volumeInfo.authors &&
            bookData.volumeInfo.authors.map((author, index) => (
              <div key={`${author}-${index}`}>
                <p style={{ textTransform: "uppercase" }}>{author}</p>
              </div>
            ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering BookItem:", error.message);
    return null;
  }
};

export default BookItem;
