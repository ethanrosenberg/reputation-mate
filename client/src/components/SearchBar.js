import React from 'react'

const SearchBar = ({ handleSearchBarChange, handleSearchBarSubmit }) => {
  return (

    <div class="col-md-6 col-md-offset-3">
    <div class="row">

    <form onSubmit={handleSearchBarSubmit}role="form" id="form-buscar">
    <div class="form-group">
    <div class="input-group">
    <input id="1" class="form-control" onChange={handleSearchBarChange} type="text" name="search" placeholder="Search..." required/>
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



export default SearchBar
