import React from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';


class BooksApp extends React.Component {

  state = {
    books : []
  };

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState({books});
      });
  }

  /**
  * @description Changes the book to another shelf
  * @param {object} book
  * @param {string} shelf
  */
  changeShelf = (book, shelf) => {
    BooksAPI.update(book,shelf)
      .then((response) => {
        book.shelf = shelf;

        let books = this.state.books.filter((bookItem) => bookItem.id !== book.id);
        books.push(book);

        this.setState({books : books});
      });
  }

  render() {
    const books = this.state.books;

    return (
      <div className="app">
        <Route exact path="/" render={() =>(
          <ListBooks 
            books={books}
            onChangeShelf={this.changeShelf}
          />
        )}/>

        <Route exact path="/search" render={() =>(
          <SearchBooks
            sortedBooks={books}
            onChangeShelf={this.changeShelf}
          />
        )}/>
      </div>
    );
  }
}

export default BooksApp
