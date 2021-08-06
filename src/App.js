import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import AppBar from './components/AppBar'
import Search from './components/Search'
import Shelves from './components/Shelves'
import AddBookButton from './components/AddBook'
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    searchResults: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(resp => this.setState({ books: resp }))
  }

  changeCurrentShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
    this.setState({
      books: this.state.books.map(singleBook => {
        // eslint-disable-next-line no-unused-expressions
        singleBook.id === book.id ? (book.shelf = shelf) : singleBook;
        return singleBook;
      })
    })
  })
  }

  render() {
    return (

      <div className="app">
        <Router>
              <Switch>
                <Route
                  path="/search"
                  render={() => (
                    <Search books={this.state.books} changeShelf = {this.changeCurrentShelf} ></Search>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={() => (
                    <div className="list-books">
                      <AppBar /> 
                      <Shelves allBooks={this.state.books} changeShelf={this.changeCurrentShelf}/>
                      <Link to="/search">
                  <AddBookButton/>
                  </Link> 
                    </div>
                  )}
                />
                {/* <Route component={NotFound} /> */}
              </Switch>
              </Router>
            </div>
          


 
 )
  }
}

export default BooksApp
