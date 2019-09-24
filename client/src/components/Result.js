import React from 'react';
import SuggestionButton from '../components/SuggestionButton'

class Result extends React.Component {
  constructor(){
    super()



  }


   sentimentButton = sentiment => {

        if(sentiment === "neutral" || sentiment === "Unknown.") {
          return <button type="button" class="btn btn-info">Neutral</button>
        } else if (sentiment === "positive") {
          return <button type="button" class="btn btn-success">Positive</button>
        } else if (sentiment === "negative") {
          return <button type="button" class="btn btn-danger">Negative</button>
        }


    }





render() {

    return (


      <tr>
      <td class="text-left" >{this.props.rank}</td>
      <td class="text-left" >{this.props.url}</td>
      <td class="text-left" >{this.sentimentButton(this.props.sentiment)}</td>
      <td class="text-left" ><SuggestionButton url={this.props.url} /></td>
      </tr>


    );
  };




}

export default Result;
