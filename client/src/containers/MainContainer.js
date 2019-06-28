import React from 'react';
import SearchContainer from './SearchContainer'
import Resultgrid from '../components/Resultgrid'
import SearchBar from '../components/SearchBar'

const MainContainer = () => {
  return (
    <div className="MainContainer">
    <h1>Check Your Reputation!</h1><br></br>
      {
        <>

        <SearchBar />
        <Resultgrid />
        </>
      }
    </div>
  )
}

export default MainContainer
