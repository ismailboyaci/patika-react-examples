import { FiSearch } from "react-icons/fi";
import "./Header.css";
import { useEffect, useRef, useState } from "react";

const Header = ({ onSearch }) => {
  // Ref for the search input element
  const inputRef = useRef(null);
  // State to hold the value of the search input
  const [searchInput, setSearchInput] = useState("");

  // Effect to focus on the input element when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Event handler for input change
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Event handler for search button click
  const handleSearch = () => {
    // Call the onSearch prop function with the search input value
    onSearch(searchInput);
  };

  return (
    <div className="header-container">
      <div>
        <h2 className="header-title">Find Book You Are Looking For</h2>
      </div>
      <div className="header-button-container">
        {/* Search input element */}
        <input
          type="text"
          placeholder="Ex. Java for beginners"
          className="header-input"
          onChange={handleChange}
          ref={inputRef}
        />
        {/* Search button with the FiSearch icon */}
        <button className="header-button" onClick={handleSearch}>
          <FiSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
