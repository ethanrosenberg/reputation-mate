import React from 'react'
import { connect } from 'react-redux';
import { updateSearchText } from '../actions/searchActions'
import { updateSearchResults } from '../actions/searchActions'

const SearchBar = props => {

  const handleSub = event => {

      event.preventDefault()

      const userInfo = props.searchText
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
        .then(response => {
          //dispatch(updateSearchResults(response));
          console.log(response)
          props.handleResults(response.results)
        })


    }

  return (

    <div class="col-md-6 col-md-offset-3">
    <div class="row">

    <form onSubmit={handleSub} role="form" id="form-buscar">
    <div class="form-group">
    <div class="input-group">
    <input id="1" class="form-control" onChange={props.handleChange} type="text" name="search" placeholder="Search..." required/>
    <span class="input-group-btn">
    <button class="btn btn-success" type="submit">
    <i class="glyphicon glyphicon-search" aria-hidden="true"></i> Search
    </button>
    </span>
    </div>
    </div>
    </form>
    </div>
    </div>

  )
}



const mapStateToProps = state => {
  return {
    searchText: state.searchText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: (e) =>
      dispatch(updateSearchText(e.target.value)),
    handleResults: (results) =>
        dispatch(updateSearchResults(results)),


  };
};



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
