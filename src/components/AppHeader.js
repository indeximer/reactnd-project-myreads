import React, {Component} from 'react';

class AppHeader extends Component{
    render(){
        return(
            <div className="list-books-title container-fluid shadow">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>MyReads</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHeader;