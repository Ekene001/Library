export const Library = (() => {
  const libraryContainer = [];

  const addBook = (newBook) => {
    libraryContainer.push(newBook);
  };
  const deleteBook = (index) => {
    libraryContainer.splice(index, 1);
  }
  const getBooks = () => {
    // make a copy to previous any access to orig array
    return libraryContainer.slice();
  };

  return {
    addBook,
    getBooks,
    deleteBook
  };
})();
