import React, {Component} from 'react';
import PropTypes from 'prop-types';
import sortIcon from '../icons/sort.png';

class SortBooks extends Component{
    static propTypes = {
        onSortBooks: PropTypes.func.isRequired
    }

    render(){
        return(
            <div className="row">
                <div className="col-12">
                    <button 
                        className="sort-az"
                        onClick={() => this.props.onSortBooks()}
                    >
                        Sort <img src={sortIcon} alt="Sort A-Z"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default SortBooks;