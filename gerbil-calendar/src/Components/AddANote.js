import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import "../style.css";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input: null,
        modal: false
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggle = this.toggle.bind(this);
  }

  listenToInput = (evt) => {
      this.setState ({
          input: evt.target.value,
      })
  }

  handleSubmit = () => {
    this.props.addNote(this.state.input);
    this.setState({
        modal: false
    })

  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
      console.log(this.state.input);
    return (
      <div>
			  <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
        />
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel} Add a Note</Button>
        <div className="addNoteModal">
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader id="noteTitle" toggle={this.toggle}><h1>Add a Note:</h1></ModalHeader>
            <ModalBody>
              <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  onChange={this.listenToInput}
              />     
            </ModalBody>
            <ModalFooter>

            <Button
                color="secondary"
                onClick={this.toggle}>
                Cancel
            </Button>
            <Button 
                color="primary" 
                onClick={this.handleSubmit}>
                Add Note
            </Button>{' '}
            </ModalFooter>
          </Modal>
        </div>
        <h2>{this.listenToInput}</h2>
      </div>
    );
  }
}

export default AddNote;
