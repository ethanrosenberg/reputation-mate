import React from 'react';


const SearchResults = (props) => {

  const searchResultsJSX = props.results.map((result, index) => (
    <tr>
    <td>{index + 1}</td>
    <td key={index}>{result}</td>
    <td>Analysis here.</td>
    </tr>
  ));
  //const searchResultsJSX <div class=”col-6 align-self-center”>= <p>{results.join(", ")}</p>
    return (

<div className ="SearchResults">
<div class="container">
<br></br>
      <table class="table">
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
</div>

    )
}

export default SearchResults
