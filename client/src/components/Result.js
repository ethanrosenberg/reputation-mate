import React from 'react';
import SuggestionButton from '../components/SuggestionButton'

class Result extends React.Component {
  constructor(){
    super()

    this.state = {
      likes: 0
    }
  }

   handleClick = event => {

     this.setState(state => {
       return {
       likes: state.likes + 1
     }
   })


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
      <td class="text-left" ><button onClick={this.handleClick} type="button" class="btn btn-info">Likes: {this.state.likes}</button></td>
      <td class="text-left" ><button  type="button" class="btn btn-info">Neutral</button></td>

      <td class="text-left" >{this.sentimentButton(this.props.sentiment)}</td>
      <td class="text-left" ><SuggestionButton url={this.props.url} /></td>
      </tr>


    );
  };




}

export default Result;
