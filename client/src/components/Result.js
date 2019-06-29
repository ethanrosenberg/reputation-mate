import React from 'react';
import SuggestionButton from '../components/SuggestionButton'

const Result = props => {

  return (


    <tr>
    <td class="text-left" >{props.rank}</td>
    <td class="text-left" >{props.url}</td>
    <td class="text-left" >{props.sentiment}</td>
    <td class="text-left" ><SuggestionButton url={props.url} /></td>
    </tr>


  );
};

export default Result;
