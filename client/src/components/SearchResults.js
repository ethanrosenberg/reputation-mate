import React from 'react';
import Modal from './Modal';
//import Popup from './Popup';


import PopupCentered from './PopupCentered';
import { ButtonToolbar, Button } from 'react-bootstrap'


class SearchResults extends React.Component {
  constructor() {
    super()
      this.state = {
        modalShow: false
      }
   }



render () {

let modalClose = () => this.setState({ modalShow: false });

  return (

  <div className ="SearchResults">
  <div class="container">
  <br></br>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Url</th>
        <th scope="col">Analysis</th>
      </tr>
    </thead>
    <tbody>
    {
      this.props.results.map((result, index) => (
        <tr>
        <td key={index}>{index + 1}</td>
        <td key={index}>{result}</td>

        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ modalShow: true, currentUrl: result })}
            >
            Launch vertically centered modal
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
