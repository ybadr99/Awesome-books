import books from './data.js'

// book class
class Book {
    constructor(title, author) {
        this.author = author,
        this.title = title
    }
    // add book
    add () {
        books.push(this)
    }
}

const createBook = (title, author)=> {
    const book = new Book(title, author);
    book.add()
}


createBook('No title', 'No author')
console.log(books);