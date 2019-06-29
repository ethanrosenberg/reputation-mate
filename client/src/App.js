

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

import NavigationBar from './components/NavigationBar';
import PopularContainer from './containers/PopularContainer';

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

  render() {


    return (
      <div className="App">

      <NavigationBar />

      <Switch>
        <Route exact path="/popular" render={PopularContainer} />
        <Route exact path="/about" render={About} />
        <Route exact path="/" render={Home} />
        <Route component={MainContainer} />
      </Switch>

      </div>

    );

  }
}




export default App;
