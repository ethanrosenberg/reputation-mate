import React from 'react';
import SearchBar  from '../components/SearchBar'
import Resultgrid  from '../components/Resultgrid'
import { connect } from 'react-redux'

const SearchContainer = () => {
  return (
    <div className="SearchContainer">
    <div class="col-md-10 col-md-offset-1">
    <div class="row">
      <SearchBar />
      <Resultgrid />
    </div>
    </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  }
}





export default connect(mapStateToProps)(SearchContainer)
