import { Library } from "./library.js";

export const Ui = (() => {
  const renderBooks = () => {
    const books = Library.getBooks();
    const libContainer = document.querySelector(".library-container");
    libContainer.innerHTML = ""; //this clears the container

    if (books.length === 0) {
      const notice = document.createElement("p");
      notice.textContent = "No books in the library yet.";
      libContainer.append(notice);
    } else {
      books.forEach((book, index) => {//index to show each books position in array
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = `<h3>${book.title} </h3> <p> ${book.author} </p> <span> (${book.pageCount} pages)</span>`;
        const btnDiv = document.createElement("div");
        btnDiv.classList.add('btns-Container')

        const readBtn = document.createElement("button");
        readBtn.classList.add("read-btn");
        readBtn.dataset.index = index;
        readBtn.textContent = book.isRead ? "Read" : "not-read";

        const bookmarkBtn = document.createElement("button");
        bookmarkBtn.classList.add("bookmark-btn");
        bookmarkBtn.dataset.index = index;
        bookmarkBtn.textContent = book.isBookmarked ? "Bookmarked" : "Bookmark";
        
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.dataset.index = index;
        deleteBtn.textContent = book.isDeleted ? "Deleted" : "Delete";

        btnDiv.append(readBtn, bookmarkBtn)
        card.append(btnDiv, deleteBtn);
        libContainer.append(card);
      });
    }
  };

  return {
    renderBooks,
  };
})();
