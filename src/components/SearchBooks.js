import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import {DebounceInput} from 'react-debounce-input';
import * as BooksAPI from '../utils/BooksAPI';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';
import AppHeader from './AppHeader';

class SearchBooks extends Component{
  static propTypes = {
    sortedBooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }

  /**
  * @description Control the input and update the state
  * @param {string} value
  */
  updateQuery = (value) =>{
    const query = value.trim();
    this.setState({query : query});

    this.searchBooks(query);
  }

  /**
    * @description Make a request to the search method of the BooksAPI
    * and updates the state with the returned books.
    * @param {string} query
    */
  searchBooks = (query) => {  
    if(query){
      BooksAPI.search(query)
        .then(books =>{
          
          if(books.length > 0){
            this.setState({books : this.sortBooksByShelf(books)})
          }else{
            this.setState({books:[]})
          }
        });
    }else{
      this.setState({books:[]});
    }
  }

  /**
  * @description Compare the books from the state to the books
  * received, and set the books to the right shelf
  * @param {string} query
  */
  sortBooksByShelf = (books) =>{
    const sortedBooks = this.props.sortedBooks;
    const comparedBooks = books.map((book) => {
      for(let sortedBook of sortedBooks){
        if(book.id === sortedBook.id){
          book.shelf = sortedBook.shelf;
          console.log(sortedBook.shelf);
        }
      }
      return book;
    });
    
    return comparedBooks;
  }

  render(){
    const {query, books} = this.state;
    const onChangeShelf = this.props.onChangeShelf;

    return(
      <div className="search-books">
        <AppHeader/>
        
        <div className="search-books-bar container position-relative">
          <Link className="close-search" to="/">Close</Link>

          <div className="search-books-input-wrapper row">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            
            <div className="col-12">

              <div className="card shadow-sm">
                <div className="card-body">
                  <DebounceInput
                    debounceTimeout={300}
                    className="form-control"
                    type="text"
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                  />
                </div>
              </div>
            </div>
            

          </div>
        </div>
        <div className="search-books-results container">
          <BooksGrid
            books={books}
            onChangeShelf={onChangeShelf}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;