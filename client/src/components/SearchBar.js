import React from 'react'
import { connect } from 'react-redux';
import { updateSearchText, search } from '../actions/searchActions'

const SearchBar = props => {

  const handleSub = event => {

      event.preventDefault()

      props.search(props.searchText)

    }

  return (

    <div class="col-md-6 col-md-offset-3">
    <div class="row">

    <form onSubmit={handleSub} role="form" id="form-buscar">
    <div class="form-group">
    <div class="input-group">
    <input id="1" class="form-control" onChange={props.updateSearchText} value={props.searchText} type="text" name="search" placeholder="Search..." required/>
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





export default connect(mapStateToProps, {updateSearchText, search})(SearchBar)
