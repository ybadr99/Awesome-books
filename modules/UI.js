import Book from './book.js';
import { getBooks } from './data.js';

const createElement = (tagName, className) => {
  const el = document.createElement(tagName);
  el.classList.add(className);

  return el;
};

const generateBookEl = (book) => {
  const bookEl = createElement('div', 'book');

  const content = createElement('div', 'content');

  const titleEl = createElement('p', 'title');
  titleEl.textContent = book.title;
  const authorEl = createElement('p', 'author');
  authorEl.textContent = `by ${book.author}`;
  content.append(titleEl);
  content.append(authorEl);

  const btn = createElement('button');
  btn.textContent = 'Remove';
  btn.onclick = () => {
    Book.remove(book.id);
    // eslint-disable-next-line no-use-before-define
    renderBooks();
  };

  bookEl.appendChild(content);
  bookEl.appendChild(btn);

  return bookEl;
};

export default function renderBooks() {
  const books = getBooks();
  document.querySelector('.books').innerHTML = '';
  books.forEach((b) => {
    document.querySelector('.books').appendChild(generateBookEl(b));
  });
}
