import "./style.css";
import { Book } from "./book.js";
import { Library } from "./library.js";
import { storage } from "./storage.js";
import { Ui } from "./ui.js";

export const controller = (() => {
  const loadBooks = () => {
    const books = storage.retrieveLibrary();

    books.forEach((book) => {
      const newBook = new Book({
        id: book.id || Date.now(), // generate ID if missing
        title: book.title,
        author: book.author,
        pageCount: book.pageCount,
        isRead: book.isRead ?? false,
        isBookmarked: book.isBookmarked ?? false,
      });

      Library.addBook(newBook);
    });
  };

  const addBook = () => {
    const form = document.querySelector("#book-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get values from form inputs
      const title = document.querySelector("#title").value;
      const author = document.querySelector("#author").value;
      const pageCount = parseInt(document.querySelector("#pages").value, 10);

      const newBook = new Book({
        id: Date.now(), // unique ID
        title,
        author,
        pageCount,
        isRead: false,
        isBookmarked: false,
      });

      // Add to Library, save to library and render ui
      Library.addBook(newBook);
      storage.saveLibrary(Library.getBooks());
      Ui.renderBooks();

      // Reset the form
      e.target.reset();
    });
  };

  const allButtonsFunctions = () => {
    const libContainer = document.querySelector(".library-container");

    libContainer.addEventListener("click", (e) => {
      const index = Number(e.target.dataset.index);
      const books = Library.getBooks();

      if (e.target.classList.contains("read-btn")) {
        books[index].toggleisRead();
        storage.saveLibrary(Library.getBooks());
        Ui.renderBooks();
      }

      if (e.target.classList.contains("bookmark-btn")) {
        books[index].toggleIsBookmarked();
        storage.saveLibrary(Library.getBooks());
        Ui.renderBooks();
      }

      if (e.target.classList.contains("delete-btn")) {
        Library.deleteBook(index);
        storage.saveLibrary(Library.getBooks());
        Ui.renderBooks();
      }
    });
  };

  // Initialize the app
  const init = () => {
    loadBooks(); // Load books from storage
    Ui.renderBooks(); // Render them to the UI
    addBook(); // Listen for form submissions
    allButtonsFunctions(); // Listen for read/bookmark/delete clicks
  };

  return {
    init,
  };
})();

controller.init();