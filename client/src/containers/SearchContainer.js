import React from 'react';
import SearchBar  from '../components/SearchBar'
import Resultgrid  from '../components/Resultgrid'


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






export default SearchContainer
