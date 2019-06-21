

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

import SearchResults from './components/SearchResults';

import NavBar from './components/NavBar';

//import {Button} from 'react-bootstrap';

class App extends  React.Component {

  constructor() {
    super()
      this.state = {
        current_user: null,
        loginForm: {
          email: "",
          password: ""
        },
        searchresults: []

      }
   }

  handleLoginFormChange = event => {
    const { name, value } = event.target
    this.setState({
      loginForm: ({
        ...this.state.loginForm,
        [name]: value
      })

    })



  }

  handleLoginFormSubmit = event => {

    event.preventDefault()

    const userInfo = this.state.loginForm
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    }

    fetch('http://localhost:3000/api/v1/login', headers)
      .then(r => r.json())
      .then(userJSON => {
        if(userJSON.error) {
          alert("invalid credentials")
        } else {
          this.setState({
            currentUser: userJSON
          })

        }
      })
      .catch(console.log)

  }

  getSearchResults = () => {
    fetch("http://localhost:3000/api/v1/searchresults")
      .then(r => r.json())
      .then(results => {
        if(results.error) {
          alert("Not authorized for those search results.")
        } else {
          this.setState({
            searchresults: results
          })
        }

      })
  }

  render() {

    const { currentUser } = this.state

      return (


      <div className="App">
      < NavBar color='black' title="ReputationMate" />
      <h2>{ currentUser ? `Logged in as ${currentUser.email}` : 'Not logged in.'}</h2>
      <Login
        handleLoginFormChange={this.handleLoginFormChange}
        email={this.state.loginForm.email}
        password={this.state.loginForm.password}
        handleLoginFormSubmit={this.handleLoginFormSubmit}
      />
      <button onClick={this.getSearchResults}> Show User's Secrets</button>
      <SearchResults searchresults={this.state.searchresults}/>
      </div>
    );
  }
}

export default App;
