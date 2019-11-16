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

                    </select>
                </div>
                <div className='book-type'>
                    <label htmlFor='book-type'>Book Type:</label>
                    <select 
                        id='book-type'
                        name='book-type'>
                     <option>No Filter</option>

                        
                    </select>
                </div>
            </div>
        )
    }
}

export default SearchFilters