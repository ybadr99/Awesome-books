export default class Book {
  // getbook from storage
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  // add book
  static add(title, author) {
    const books = this.getBooks();
    books.push({
      id: Date.now().toString(),
      title: title || 'no title',
      author: author || 'no author',
    });

    localStorage.setItem('books', JSON.stringify(books));
  }

  // remove book
  static remove(id) {
    const books = this.getBooks();

    const index = books.findIndex((book) => book.id === id);

    if (index > -1) {
      books.splice(index, 1);
    }

    localStorage.setItem('books', JSON.stringify(books));
  }

  static generateBookEl(book) {
    const bookEl = this.createElement('div', 'book');

    const content = this.createElement('div', 'content');

    const titleEl = this.createElement('p', 'title');
    titleEl.textContent = book.title;
    const authorEl = this.createElement('p', 'author');
    authorEl.textContent = `by ${book.author}`;
    content.append(titleEl);
    content.append(authorEl);

    const btn = this.createElement('button');
    btn.textContent = 'Remove';
    btn.onclick = () => {
      Book.remove(book.id);
      this.renderBooks();
    };

    bookEl.appendChild(content);
    bookEl.appendChild(btn);

    return bookEl;
  }

  static renderBooks() {
    const books = this.getBooks();
    document.querySelector('.books').innerHTML = '';
    books.forEach((b) => {
      document.querySelector('.books').appendChild(this.generateBookEl(b));
    });
  }

  static createElement(tagName, className) {
    const el = document.createElement(tagName);
    el.classList.add(className);

    return el;
  }
}