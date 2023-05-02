/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
const books = getBooks();

const containerEl = document.querySelector(".books");
const form = document.querySelector("#form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const navLinks = document.querySelectorAll("li");
const sections = document.querySelectorAll("section");

// book class
class Book {
  // add book
  static add(title, author) {
    books.push({
      id: Date.now().toString(),
      title: title || "no title",
      author: author || "no author",
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

// creating book dom element
const generateBookEl = (book) => {
  const bookEl = createElement("div", "book");

  const content = createElement("div", "content");

  const titleEl = createElement("p", "title");
  titleEl.textContent = book.title;
  const authorEl = createElement("p", "author");
  authorEl.textContent = `by ${book.author}`;
  content.append(titleEl);
  content.append(authorEl);

  const btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.onclick = () => {
    Book.remove(book.id);
    saveBooks(books);
    renderBooks();
  };

  bookEl.appendChild(content);
  bookEl.appendChild(btn);

  return bookEl;
};

const renderBooks = () => {
  containerEl.innerHTML = "";
  books.forEach((b) => {
    containerEl.append(generateBookEl(b));
  });
};

renderBooks();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  Book.add(title.value, author.value);
  saveBooks(books);
  title.textContent = "";
  author.textContent = "";
  renderBooks();
  showSection("section-list");
});

const showSection = (id) => {
  console.log(id);

  navLinks.forEach((li) => {
    if (id === li.id) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
  // console.log(sections);

  sections.forEach((sec) => {
    if (sec.classList.value !== id) {
      sec.style.setProperty("display", "none");
    } else {
      sec.style.setProperty("display", "block");
    }
  });
};

navLinks.forEach((li) => {
  li.addEventListener("click", () => {
    showSection(li.id);
  });
});

showSection("section-list");
