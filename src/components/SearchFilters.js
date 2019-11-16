import React from 'react'
import './searchFilters.css'

class SearchFilters extends React.Component {
    render() {
        return(
            <div className='search-filters'>
                <div className='print-type'>
                    <label htmlFor='print-type'>Print Type:</label>
                </div>
                <div className='book-type'>
                    <label htmlFor='book-type'>Book Type:</label>
                </div>
            </div>
        )
    }
}

export default SearchFilters