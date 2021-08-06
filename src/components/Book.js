import React from 'react';
import PropTypes from 'prop-types';
import ChangeBookShelf from './ChangeBookShelf';

const Book = props => {
    const { book, books, changeShelf } = props;
    const coverImage = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "https://cdn.searchenginejournal.com/wp-content/uploads/2014/11/youtube-change-url-6009ea4f8d221-760x400.png";
    const title = book.title;

    return (
        <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${coverImage})`}}
          />
          <ChangeBookShelf book={book} books={books} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{title}</div>
        {
        /* Map through authors and render each on separate line if they're more than one*/
        book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

export default Book;