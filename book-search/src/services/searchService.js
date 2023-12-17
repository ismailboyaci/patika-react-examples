import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const getBooks = async (bookname, maxResult) => {
  const { data } = await axios.get(
    BASE_URL,
    { params: { q: bookname, maxResults: maxResult, orderBy: 'newest', printType: 'books' } },
    { headers: { key: API_KEY } }
  );
  return data;
};

export const getBookById = async (bookId) => {
  const { data } = await axios.get(`${BASE_URL}/${bookId}`, { Headers: { key: API_KEY } });
  return data;
};
