import { DateTime } from './modules/luxon.js';
import Book from './modules/book.js';
import renderBooks from './modules/UI.js';

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const navLinks = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');

const showSection = (id) => {
  navLinks.forEach((li) => {
    if (id === li.id) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });

  sections.forEach((sec) => {
    if (sec.classList.value !== id) {
      sec.style.setProperty('display', 'none');
    } else {
      sec.style.setProperty('display', 'block');
    }
  });
};

renderBooks();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  Book.add(title.value, author.value);
  title.value = '';
  author.value = '';
  renderBooks();
  showSection('section-list');
});

navLinks.forEach((li) => {
  li.addEventListener('click', () => {
    showSection(li.id);
  });
});

showSection('section-list');

// Date
const displayDate = () => {
  const now = new Date();
  const date = DateTime.now().toLocaleString(DateTime.DATE_FULL);
  const time = now.toLocaleTimeString();
  document.querySelector('.date').textContent = `${date} ${time}`;
};

setInterval(displayDate, 10);