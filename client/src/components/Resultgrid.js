import React from 'react';
import Result from './Result';
import { connect } from 'react-redux';

const Resultgrid = props => {
  return (
    <div className='result-container'>
    {props.searchResults.map(r => <Result key={r.rank} searchResults={r} />)}
    </div>

  );
};

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  };
};


export default connect(mapStateToProps)(Resultgrid);
