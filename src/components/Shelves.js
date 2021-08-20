import React from 'react'
import SingleShelf from './SingleShelf';

class Shelves extends React.Component {

    render() {
        const allBooks = this.props.allBooks;
        const currentlyReading = allBooks.filter(
            book => book.shelf === "currentlyReading"
        );
        const wantToRead = allBooks.filter(
            book => book.shelf === "wantToRead"
        );
        const read = allBooks.filter(
            book => book.shelf === "read"
        );

        return (
            <div className="list-books-content">
              <div>

                {/* CURRENTLY READING SHELF */}
               <SingleShelf booksOnShelf={currentlyReading} shelfTitle={"Currently Reading"} changeShelf={this.props.changeShelf}/>

                {/* WANT TO READ SHELF */}
              <SingleShelf booksOnShelf={wantToRead} shelfTitle={"Want to Read"} changeShelf={this.props.changeShelf}/>

                {/* READ SHELF */}
                <SingleShelf booksOnShelf={read} shelfTitle={"Read"} changeShelf={this.props.changeShelf}/>

              </div>
            </div>

        )
    }
}

export default Shelves;