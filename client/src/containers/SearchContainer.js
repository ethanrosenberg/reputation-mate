import React from 'react';
import SearchBar  from '../components/SearchBar'
import Resultgrid  from '../components/Resultgrid'
import { connect } from 'react-redux'

const SearchContainer = props => {
  return (
    <div className="SearchContainer">
    <div class="col-md-10 col-md-offset-1">
    <div class="row">
      <SearchBar />
      { props.hasResults.length > 1 ? <Resultgrid /> : <h3>Results: 0</h3> }
    </div>
    </div>
    </div>
  );
}



const mapStateToProps = state => {
  return {
    hasResults: state.searchResults
  }
}


export default connect(mapStateToProps)(SearchContainer)
