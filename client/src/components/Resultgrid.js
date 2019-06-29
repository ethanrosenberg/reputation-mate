import React from 'react';
import Result from './Result';
import { connect } from 'react-redux';

const Resultgrid = props => {
  return (
    <div className='result-container'>

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
        <Result key={index} rank={result.rank} url={result.url} sentiment='happy' />
      ))
    }

    </tbody>
  </table>

    </div>

  );
};

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  };
};


export default connect(mapStateToProps)(Resultgrid);
