import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
 

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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a Note:</ModalHeader>
          <ModalBody>
            <form>
                <Input onChange={this.listenToInput} type="text" name="name" />     
            </form>       
          </ModalBody>
          <ModalFooter>
            <Button 
              color='primary' 
              onClick={this.handleSubmit}>Submit</Button>{' '}
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <h2>{this.listenToInput}</h2>
      </div>
    );
  }
}

export default AddNote;
