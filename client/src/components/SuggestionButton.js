import React from 'react';
import PopupCentered from './PopupCentered';
import { ButtonToolbar, Button } from 'react-bootstrap'

class SuggestionButton extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        modalShow: false,
        currentUrl: ''
      }
  }

render() {

let modalClose = () => this.setState({ modalShow: false });

  return (
    <ButtonToolbar>
       <Button
         variant="primary"
         onClick={() => this.setState({ modalShow: true, currentUrl: this.props.url })}
         >
         Smart Analysis
       </Button>

       <PopupCentered
         show={this.state.modalShow}
         onHide={modalClose}
         url={this.state.currentUrl}
       />
   </ButtonToolbar>
  )


}



}

export default SuggestionButton
