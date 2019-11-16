import React from 'react'
import BookList from './BookList'

class Results extends React.Component {
    render() {
        let bookResults = this.props.books.items.map((book, i) =>
        <BookList {...book} key={i}/>)
        return(
            <div className = 'results-list'>
                {bookResults}
            </div>
        )
    }
}

export default Results