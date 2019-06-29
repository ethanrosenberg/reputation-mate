import React from 'react';

const PopularItem = props => {


  return (

    <tr>
    <td class="text-left" >{props.index + 1}</td>
    <td class="text-left" >{props.url}</td>
    <td class="text-left" >{props.occurrences}</td>
    <td class="text-left" >{props.sentiment || "Unknown."}</td>
    </tr>

  )
}

export default PopularItem
