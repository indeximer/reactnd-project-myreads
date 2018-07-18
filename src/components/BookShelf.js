import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

class BookShelf extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    }

    render(){
        const {books, onChangeShelf, title} = this.props;

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
}

export default BookShelf;