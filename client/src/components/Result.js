import React from 'react';

const Result = props => {
  return (
    <div className='result-container'>
    <h3>{props.searchResults.url}</h3>
    </div>

  );
};

export default Result;
