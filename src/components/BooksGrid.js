import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import SortBooks from './SortBooks';
import sortBy from 'sort-by';

class BookGrid extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
    }

    state = {sort:false}

    sortBooksAz = () => {
        this.setState({sort:true});
    }

    render(){
        const {books, onChangeShelf} = this.props;

        if(this.state.sort){
            books.sort(sortBy('title'));
        }

        return(
            <div>
                <SortBooks onSortBooks={this.sortBooksAz} />
                <ol className="books-grid row">
                    {books.map((book) =>(
                        <li key={book.id} className="col-6 col-sm-auto">
                            <Book
                                book={book}
                                onChangeShelf={onChangeShelf}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default BookGrid;