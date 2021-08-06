import React from 'react'

class SingleShelf extends React.Component {

    render() {
        const singleShelfBooks = this.props.booksOnShelf;
        const shelfTitle = this.props.shelfTitle
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {singleShelfBooks.map(book => (
                            <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "https://cdn.searchenginejournal.com/wp-content/uploads/2014/11/youtube-change-url-6009ea4f8d221-760x400.png"})`}}></div>
                                <div className="book-shelf-changer">
                                  <select value={book.shelf} onChange={e => this.props.changeShelf(book, e.target.value)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.authors}</div>
                            </div>
                          </li>
                        ))}
                    </ol>
                  </div>
                </div>
        )
    }
}

export default SingleShelf;