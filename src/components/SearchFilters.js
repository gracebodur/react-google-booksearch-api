import React from 'react'
import './searchFilters.css'

class SearchFilters extends React.Component {
    render() {
        return(
            <div className='search-filters'>
                <div className='print-type'>
                    <label htmlFor='print-type'>Print Type:</label>
                    <select 
                        id='print-type'
                        name='print-type'>
                    <option>All</option>
                    <option value='ebooks'>E-book</option>
                    <option value='free-ebooks'>Free E-book</option>

                    </select>
                </div>
                <div className='book-type'>
                    <label htmlFor='book-type'>Book Type:</label>
                    <select 
                        id='book-type'
                        name='book-type'>
                    <option value='all'>No Filter</option>
                    <option value='books'>Books</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default SearchFilters