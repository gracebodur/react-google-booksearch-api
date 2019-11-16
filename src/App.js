import React from 'react';
import './App.css';
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Results from './components/Results'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      books: {
        items: []
        }
      }
    }

    componentDidMount() {
      fetch('https://www.googleapis.com/books/v1/volumes?q=Henry')
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong')
        }
        return response
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: data,
          error: null,
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
    }

    onSubmitForm =(e) => {
      e.preventDefault()
      console.log(e.target[0].value);

      let searchTerm = document.getElementById('search-input').value
      console.log(searchTerm)
      let printType = document.getElementById('print-type').value
      console.log(printType)
      let bookType = document.getElementById('book-type').value
      console.log(bookType)
      let url = printType === 'All' ? `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=${bookType}` :
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=${printType}&printType${bookType}`
      document.getElementById('search-input').value=''
    // }

    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong')
        }
        return response
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: data,
          error: null,
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
    }
  
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm onSubmitForm={this.state.onSubmitForm}/>
        <main>
        <Results />
        </main>
      </div>
    );
  }
}

export default App;
