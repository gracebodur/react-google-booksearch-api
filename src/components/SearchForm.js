import React from 'react'
import SearchInput from './SearchInput'
import SearchFilters from './SearchFilters'


function SearchForm(props) {
    return(
        <form onSubmit={props.onSubmitForm} className='form'>
            <SearchInput />
            <SearchFilters />
        </form>
    )
}

export default SearchForm