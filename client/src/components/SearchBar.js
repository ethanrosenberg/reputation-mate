import React from 'react'

const SearchBar = ({ handleSearchBarChange, handleSearchBarSubmit }) => {
  return (

    <div class="container h-100">
     <form onSubmit={handleSearchBarSubmit}>
       <div class="d-flex justify-content-center h-100">
         <div class="searchbar">
           <input onChange={handleSearchBarChange} class="search_input" type="text" name="" placeholder="Search..."/>
           <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
         </div>
       </div>
       </form>
     </div>

  )
}



export default SearchBar
