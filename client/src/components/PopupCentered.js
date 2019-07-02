import React from 'react';
import ReactDOM from 'react-dom';


import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import { Button } from 'react-bootstrap'

class PopupCentered extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    console.log("loading...")
    this.setState({
      isLoading: false
    });
  }


  render() {

    return (
      <Modal
        style={{opacity:1}}
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.url}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p>
          {this.props.isLoading ?
          <>
          <h4>Here is our smart suggestion:</h4>
          <h3>Loading...</h3></> :
           this.props.analysis
          }
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PopupCentered;
