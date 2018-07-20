import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import AppHeader from './AppHeader';

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

function ListBooks(props){
    /**
    * @description Separete the books by the given shelf
    * @param {array} book
    * @param {string} shelf
    * @returns {array} Array of books on the given shelf
    */
    const setBooksOnShelf = (books, shelf) => {
        const booksOnShelf = books.filter((book) => book.shelf === shelf);
        return booksOnShelf;
    };

    const {books, onChangeShelf} = props;
    const bookShelfs =[
        {
            category: 'currentlyReading',
            title: 'Currently Reading'
        },
        {
            category: 'wantToRead',
            title: 'Want To Read'
        },
        {
            category: 'read',
            title: 'Read'
        }
    ];

    return(
        <div className="list-books">
            <AppHeader/>
            <div className="list-books-content">
                {bookShelfs.map((shelf) => {
                    return(
                        <BookShelf
                            key={shelf.title}
                            books={setBooksOnShelf(books, shelf.category)}
                            onChangeShelf={onChangeShelf}
                            title={shelf.title}
                        />
                    )
                })}
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

export default ListBooks;