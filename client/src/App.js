

import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';

//import SearchResults from './components/SearchResults';

import NavBar from './components/NavBar';

//import {Button} from 'react-bootstrap';

class App extends  React.Component {

  constructor() {
    super()
      this.state = {
        query: "",
        searchresults: []
      }
   }
/*
   componentDidMount() {
     const token = localStorage.getItem("token")
     const headers = {
       headers: {
         "Authorization": token
       }
     }

     if (token) {
       fetch('http://localhost:3000/api/v1/get_current_user', headers)
         .then(r => r.json())
         .then(console.log)
     }
     else {
       console.log("error!!!")
     }
   }
*/


handleSearchBarChange = event => {
  const { name, value } = event.target
  this.setState({
    query: ({
      query: value
    })
  })
}

handleSearchBarSubmit = event => {

    event.preventDefault()


    const userInfo = this.state.query
    console.log(userInfo)
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    }

    fetch('http://localhost:3000/api/v1/search', headers)
      .then(r => r.json())
      .then(console.log)

  }



  render() {

      return (

      <div className="App">
      <NavBar color='black' title="ReputationMate" />
      <h2>Check Your Reputation!</h2>
      <SearchBar
      handleSearchBarChange={this.handleSearchBarChange}
      handleSearchBarSubmit={this.handleSearchBarSubmit}
      />

      </div>
    );
  }
}

export default App;
