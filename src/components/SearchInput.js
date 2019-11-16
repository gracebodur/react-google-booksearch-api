import React from 'react'

class SearchInput extends React.Component {
    render(){
        return(
            <div className='search-input'>
                <label htmlFor='searchbox'>Search:</label>
                <input
                    placeholder= 'Enter search term...'
                    name= 'searchbox'
                    id='searchbox' />
                <button 
                type='submit'>Search</button>
            </div>
        )
    }
}

export default SearchInput