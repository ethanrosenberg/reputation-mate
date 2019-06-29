import React from 'react';
import PopularTable from '../components/PopularTable'

const PopularContainer = () => {
  return (
    <div className="PopularContainer">
    <div class="col-md-10 col-md-offset-1">
    <div class="row">
    <h1>Most Popular Web Properties!</h1>
    <PopularTable />
    </div>
    </div>
    </div>
  );
}

export default PopularContainer
