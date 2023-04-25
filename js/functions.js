/* eslint-disable no-unused-vars */
// save to storage
const saveBooks = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

// get to storage
const getBooks = () => {
  const booksJson = JSON.parse(localStorage.getItem('books'));

  if (booksJson) {
    return booksJson;
  }
  return [];
};

const createElement = (tagName, className = null) => document.createElement(tagName, className);
