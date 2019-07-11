import React from 'react';
import SearchBar  from '../components/SearchBar'
import Resultgrid  from '../components/Resultgrid'
import { connect } from 'react-redux'
import logo from "../logo.svg"

class SearchContainer extends React.Component {


  render() {




    return (
      <div className="SearchContainer">
      <div class="col-md-10 col-md-offset-1">
      <div class="row">
        <SearchBar />
       { this.props.hasResults.length > 1 ? <Resultgrid /> : null}

      </div>
      </div>
      </div>
    );
  }

}



const mapStateToProps = state => {
  return {
    hasResults: state.searchResults,
    loadingResults: state.isLoading
  }
}


export default connect(mapStateToProps)(SearchContainer)
