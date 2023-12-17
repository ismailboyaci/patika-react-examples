import { useEffect, useState } from "react";
import { getBooks, getBookById } from "../services/searchService";
import Header from "../components/Header/Header";
import BookList from "../components/BookList/BookList";

const Home = () => {
  // State for holding the list of books
  const [books, setBooks] = useState([]);
  // State for holding the total number of records
  const [totalReord, setTotalReord] = useState(null);

  // Function to handle the search operation
  const handleSearch = async (searchText) => {
    // Call the getBooks function from the searchService
    const response = await getBooks(searchText, 20);
    // Extract the items and totalItems from the response
    const updatedBooks = response.items;
    const updatedTotalReord = response.totalItems;
    
    // Update the state with the new list of books and total number of records
    setBooks(updatedBooks);
    setTotalReord(updatedTotalReord);
  }
  
  return (
    <>
      {/* Header component for search input */}
      <Header onSearch={handleSearch} />
      {/* BookList component to display the list of books */}
      <BookList booksData={books} />
    </>
  );
};

export default Home;
