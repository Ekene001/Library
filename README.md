# Library App

A simple JavaScript library manager where you can add books, mark them as read, bookmark favorites, and delete entries. The app is bundled with Webpack and saves data in `localStorage` so your books remain after refresh.

## What You Built

This project includes:

- A `Book` model with book properties and toggle methods
- A `Library` module that stores and manages all books
- A `UI` module that renders book cards and action buttons
- A `Storage` module that saves/loads data from browser `localStorage`
- A controller flow in `index.js` that wires form submission, button events, and app initialization
- A responsive grid-style interface with custom CSS

## Features

- Add a new book with:
  - Title
  - Author
  - Page count
- Toggle a book between read and not-read
- Toggle bookmark status for any book
- Delete a book from the list
- Auto-load saved books when the app starts
- Empty-state message when no books exist

## Project Structure

```text
library app/
  package.json
  webpack.config.js
  src/
    book.js
    library.js
    storage.js
    ui.js
    index.js
    template.html
    style.css
```

## File Responsibilities

- `src/book.js`: Defines the `Book` class and status toggle methods.
- `src/library.js`: Handles adding, deleting, and retrieving books.
- `src/storage.js`: Handles persistence with `localStorage` (`saveLibrary`, `retrieveLibrary`).
- `src/ui.js`: Renders all books and creates action buttons dynamically.
- `src/index.js`: Main controller and startup logic (`controller.init()`).
- `src/template.html`: App markup and form structure.
- `src/style.css`: App styling for layout, cards, and buttons.
- `webpack.config.js`: Development build config with CSS/HTML loaders and dev server setup.

## How AI Helped In What You Created

AI support (such as GitHub Copilot) can be considered part of this project in these ways:

- Helped scaffold module-based structure (Book, Library, UI, Storage)
- Assisted with event-driven controller pattern in `index.js`
- Suggested `localStorage` persistence flow
- Improved rendering logic and button action wiring
- Accelerated debugging and cleanup of repetitive code patterns

In short: you created the app logic and structure, and AI acted as a coding assistant to speed up implementation and refinement.

## Tech Stack

- JavaScript (ES Modules)
- HTML5
- CSS3
- Webpack 5
- Webpack Dev Server

## Run Locally

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npx webpack serve --open
```

Create production build:

```bash
npx webpack --mode production
```

## Notes

- Data is stored in browser `localStorage` under the key `Library`.
- This project currently has no automated tests configured (`npm test` is a placeholder).

## Future Improvements

- Add edit/update book details
- Add search and filter (read/bookmarked)
- Add validation/error messages in the UI
- Add unit tests for modules
- Add npm scripts (`start`, `build`) in `package.json`
