import React from 'react';
import './App.css';
import Header from './components/Header'
import SearchForm from './components/SearchForm'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state={
      
  //     }
  //   }
  // }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm />
      </div>
    );
  }
}

export default App;
