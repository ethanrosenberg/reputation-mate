

import React from 'react';
import logo from './logo.svg';
import './App.css';

//import SearchBar from './components/SearchBar';
//import SearchResults from './components/SearchResults';

import About from './components/About';
import Home from './components/Home';
//import Popup from './components/Popup';

import { Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer'
import { connect } from 'react-redux';

//import { addSearchResults } from "./actions/searchActions.js"


//import PopupCentered from './components/PopupCentered';
//import { ButtonToolbar, Button } from 'react-bootstrap'

import NavigationContainer from './containers/NavigationContainer';

//import {Button} from 'react-bootstrap';

class App extends  React.Component {

/*
  constructor() {
    super()
      this.state = {
        query: "",
        searchresults: [],
        modalShow: false
      }
   }
*/


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




handleSearchBarSubmit = event => {

    event.preventDefault()


    const userInfo = this.state.query
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    }

    fetch('http://localhost:3000/api/v1/search', headers)
      .then(r => r.json())
      .then(response => {
        console.log(response.results)
        this.setState({
          query: this.state.query,
          searchresults: response.results
        })
      })
  }




  handleOnClick = event => {
    this.props.increaseCount();
  };



  render() {

    let modalClose = () => this.setState({ modalShow: false });

/*
    const hasResults = this.state.searchresults.length > 0;
    let allresults;
    if (hasResults) {
      allresults = <SearchResults results={this.state.searchresults}/>;
    }
*/

//      //<SearchBar handleSearchBarChange={this.handleSearchBarChange} handleSearchBarSubmit={this.handleSearchBarSubmit} />

    return (

      <div className="App">


      <NavigationContainer />

      <Switch>
        <Route exact path="/about" render={About} />
        <Route component={ MainContainer } />
      </Switch>

      </div>

    );


  }
}



//export default App;

export default App;
