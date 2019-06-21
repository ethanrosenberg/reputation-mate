import React from 'react';

const SearchResults = ({ searchresults }) => {
  const searchResultsJSX = searchresults.map(result => <p key={result.id}>{result.url}</p>)
    return (
      <div className ="SearchResults">
        {searchResultsJSX}
      </div>

    )
}

export default SearchResults
