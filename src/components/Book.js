import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Book extends Component{
    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
    }

    render(){
        const {book, onChangeShelf} = this.props;

        const bookCover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : '';
        const bookTitle = book.title ? book.title : 'No title available';
        const bookShelf = book.shelf ? book.shelf :'none';

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}></div>
                    <div className="book-shelf-changer">
                        <select 
                            defaultValue={bookShelf}
                            onChange={(event) => onChangeShelf(book, event.target.value)}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{bookTitle}</div>
                {book.authors && book.authors.map((author) =>(
                    <div key={author} className="book-authors">{author}</div>
                ))}
            </div>
        );
    }
}

export default Book;