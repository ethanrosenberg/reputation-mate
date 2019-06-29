import React from 'react';
import SuggestionButton from '../components/SuggestionButton'

const Result = props => {

  return (


    <tr>
    <td class="text-left" key={props.rank}>{props.rank}</td>
    <td class="text-left" key={props.rank}>{props.url}</td>
    <td class="text-left" key={props.rank}>{props.sentiment}</td>
    <td class="text-left" key={props.rank}><SuggestionButton url={props.url} /></td>
    </tr>


  );
};

export default Result;
