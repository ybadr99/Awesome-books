import { getBooks, saveBooks } from './data.js';

export default class Book {
  // add book
  static add(title, author) {
    const books = getBooks();
    books.push({
      id: Date.now().toString(),
      title: title || 'no title',
      author: author || 'no author',
    });

    saveBooks(books);
  }

  // remove book
  static remove(id) {
    const books = getBooks();

    const index = books.findIndex((book) => book.id === id);

    if (index > -1) {
      books.splice(index, 1);
    }

    saveBooks(books);
  }
}