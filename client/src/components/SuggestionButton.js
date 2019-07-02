import React from 'react';
import PopupCentered from './PopupCentered';
import { ButtonToolbar, Button } from 'react-bootstrap'

import { updateCurrentUrl } from '../actions/searchActions'

class SuggestionButton extends React.Component {
  
  constructor(props){
    super(props)
      this.state = {
        modalShow: false,
        currentUrl: '',
        currentAnalysis: '',
        isLoading: true
      }
  }



render() {


   const handleSmartClick = () => {

    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: this.props.url })
    }

    fetch('http://localhost:3000/api/v1/findproperty', headers)
      .then(r => r.json())
      .then(response=> {
        this.setState({ modalShow: true, currentUrl: this.props.url , currentAnalysis: response.analysis});
      })

    }

    let modalClose = () => this.setState({ modalShow: false });


      return (
        <ButtonToolbar>
           <Button
             variant="primary"
             onClick={handleSmartClick}
             >
             Smart Analysis
           </Button>

           <PopupCentered
             show={this.state.modalShow}
             onHide={modalClose}
             url={this.state.currentUrl}
             analysis={this.state.currentAnalysis || "Unknown."}
           />
       </ButtonToolbar>
      )

  }


}

export default SuggestionButton
