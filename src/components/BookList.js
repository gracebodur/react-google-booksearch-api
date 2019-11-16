import React from 'react'

function BookList(props) {
    return( 
    <div className='book'>
    <h1>{props.volumeInfo.title}</h1>
    {props.volumeInfo.imageLinks ? 
    <image src={props.volumeInfo.imageLinks.thumbnail} alt='book cover'/> : null} 

    <h2>Author:{props.volumeInfo.authors}</h2>

    {props.saleInfo.listPrice ? <h2>Price:{props.saleInfo.listPrice.amount}</h2> : <h2>Price: not for sale</h2>}
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