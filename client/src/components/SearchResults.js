import React from 'react';


const SearchResults = (props) => {

  const searchResultsJSX = props.results.map((result, index) => (
    <tr>
    <td>{index + 1}</td>
    <td key={index}>{result}</td>
    <td>Analysis here.</td>
    </tr>
  ));
  //const searchResultsJSX = <p>{results.join(", ")}</p>
    return (
      <div className ="SearchResults">

      <table class="table">
      <caption>List of users</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Url</th>
          <th scope="col">Analysis</th>
        </tr>
      </thead>
      <tbody>
          {searchResultsJSX}
      </tbody>
    </table>


      </div>

    )
}

export default SearchResults
