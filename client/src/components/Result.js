import React from 'react';

const Result = props => {

  return (


    <tr>
    <td class="text-left" key={props.rank}>{props.rank}</td>
    <td class="text-left" key={props.rank}>{props.url}</td>
    <td class="text-left" key={props.rank}>{props.sentiment}</td>
    </tr>


  );
};

export default Result;
