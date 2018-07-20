import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}

function BookShelf (props){
    
    const {books, onChangeShelf, title} = props;

    return(
        <div className="container-fluid book-shelf-wrapper" >
            <div className="bookshelf container">
                <div className="row">
                    <div className="col">
                        <h2 className="bookshelf-title pb-1">{title}</h2>
                    </div>
                </div>
                <BooksGrid
                    books={books}
                    onChangeShelf={onChangeShelf}
                />
            </div>
        </div>
    );

}


export default BookShelf;