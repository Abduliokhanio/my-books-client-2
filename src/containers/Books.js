import React, { Component } from 'react';
import { books } from '../data';
import Book from '../components/Book';
import { connect } from 'react-redux';

class Books extends Component {
    constructor(props){
        super(props)
    }

    render(){

        if (this.props.isLoading){
            return(
                <h1>Loading...</h1>
            )
        }
        else {
            return (
            <div>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>TD</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.books.map(book => {
                                return(
                                    <Book key={book.id} book={book}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )}

       
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.booksData.books || [],
        isLoading: state.booksData.isLoading,
    }
}

export default connect(mapStateToProps, null)(Books);