const books = getBooks();

const containerEl = document.querySelector(".container");
const form = document.querySelector("#form");

// book class
class Book {
  // add book
  static add(title, author) {
    books.push({
      id: Date.now().toString(),
      title: title ? "" : "no title",
      author: author ? "" : "no author",
    });
  }

  // remove book
  static remove(id) {
    const index = books.findIndex((book) => book.id === id);

    if (index > -1) {
      books.splice(index, 1);
    }
  }
}

//creating book dom element
const generateBookEl = (book) => {
  const bookEl = createElement("div", "book");

  const titleEl = createElement("p", "title");
  titleEl.textContent = book.title;
  const authorEl = createElement("p", "author");
  authorEl.textContent = book.author;
  const btn = document.createElement("button");
  btn.textContent = "remove";
  btn.onclick = () => {
    Book.remove(book.id);
    saveBooks(books);
    renderBooks();
  };
  const hr = createElement("hr");

  bookEl.appendChild(titleEl);
  bookEl.appendChild(authorEl);
  bookEl.appendChild(btn);
  bookEl.appendChild(hr);

  return bookEl;
};

const renderBooks = () => {
  containerEl.innerHTML = "";
  books.forEach((b) => {
    containerEl.append(generateBookEl(b));
  });
};

renderBooks();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.querySelector(".title").value;
  const author = document.querySelector(".author").value;

  Book.add(title, author);
  saveBooks(books);
  renderBooks();
});
