import React from 'react';
import Modal from './Modal';



import PopupCentered from './PopupCentered';
import { ButtonToolbar, Button } from 'react-bootstrap'


class SearchResults extends React.Component {
  constructor() {
    super()
      this.state = {
        modalShow: false,

      }
   }





render () {

let modalClose = () => this.setState({ modalShow: false });

const hasNegativeItems = (props) => {



  this.setState({ hasNegativeItems: false })

   if(props.results.some( item => item['sentiment'] === 'negative' )) {
     return <div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
   } else {
     return ""
   }

}

  return (

  <div className ="SearchResults">
  
  <div class="container">
  <br></br>

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
      this.props.results.map((result, index) => (
        <tr>
        <td key={result.rank}>{result.rank}</td>
        <td key={result.rank}>{result.url}</td>
        <td key={result.rank}>{result.sentiment}</td>

        <ButtonToolbar>
           <Button
             variant="primary"
             onClick={() => this.setState({ modalShow: true, currentUrl: result.url })}
             >
             Smart Analysis
           </Button>

           <PopupCentered
             show={this.state.modalShow}
             onHide={modalClose}
             url={this.state.currentUrl}
           />
       </ButtonToolbar>


        </tr>
      ))
    }

    </tbody>
  </table>

  </div>
  </div>




  )

}
  //const searchResultsJSX <div class=”col-6 align-self-center”>= <p>{results.join(", ")}</p>

}


export default SearchResults
