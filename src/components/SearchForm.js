import React from 'react'
import SearchInput from './SearchInput'
import SearchFilters from './SearchFilters'


function SearchForm() {
    return(
        <form>
            <SearchInput />
            <SearchFilters />
        </form>
    )
}

export default SearchForm