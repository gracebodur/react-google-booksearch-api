import React from 'react'
import './bookList.css'

function BookList(props) {
    return( 
    <div className='book'>
        <h1 className='bookTitle'>{props.volumeInfo.title}</h1>
            {props.volumeInfo.imageLinks ? 
            <img
                className='bookImage'
                src={props.volumeInfo.imageLinks.thumbnail} 
                alt='Book cover'/> : null } 

        <h2 className='author'>Author:{props.volumeInfo.authors}</h2>
            {props.saleInfo.listPrice ? 
        <h2 className='price'>Price:{props.saleInfo.listPrice.amount}</h2> 
            : <h2>Price: not for sale</h2>}

        <p>{props.searchInfo.textSnippet}</p>
    </div>
    )
}

BookList.defaultProps = {
    searchInfo: {
        textSnippet: '',
    },
    volumeInfo: {
        title: '',
        imageLinks: [],
    },
    saleInfo: {
        listPrice: '',
    }
}

export default BookList