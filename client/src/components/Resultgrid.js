import React from 'react';
import Result from './Result';
import { connect } from 'react-redux';



const Resultgrid = props => {
  return (
    <div className='result-container'>

    <h3>Results: {props.currentQuery}</h3>
    <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Url</th>
        <th scope="col">Initial Sentiment</th>
        <th scope="col">Analysis</th>
      </tr>
    </thead>
    <tbody>
    {

      props.searchResults.map((result, index) => (
        <Result key={index} rank={result.rank} analysis={result.analysis} url={result.url} sentiment={result.sentiment}/>
      ))
    }

    </tbody>
  </table>

    </div>

  );
};

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    currentQuery: state.searchText
  };
};


export default connect(mapStateToProps)(Resultgrid);
