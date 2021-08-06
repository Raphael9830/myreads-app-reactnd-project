import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    searchedBooks: [],
    searchError: false
  };

  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    // if input field is not empty, run search
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ searchedBooks: books, searchError: false })
          : this.setState({ searchedBooks: [], searchError: true });
      });

      // if input field is empty, reset state to default
    } else this.setState({ searchedBooks: [], searchError: false });
  };

  render() {
    const { query, searchedBooks, searchError } = this.state;
    const { books, changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {searchedBooks.length > 0 && (
            <div>
              <h3>{searchedBooks.length} results found </h3>
              <ol className="books-grid">
                {searchedBooks.map(book => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    changeShelf={changeShelf}
                  />
                )
                )}
              </ol>
            </div>
          )}
          {searchError && (
            <h3>Ooops! Cannot find any book matching your search. Please try again</h3>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
