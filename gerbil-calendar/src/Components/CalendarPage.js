import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Card, CardImg, Form, FormGroup, FormText, Label, Input } from 'reactstrap';

import ReactDOM from 'react-dom';
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';

import popupModal from "../popupModal";
import '../calendarStyle.css';
import 'bootstrap/dist/css/bootstrap.css';

/*
TUTORIAL:
https://www.newline.co/@dmitryrogozhny/how-to-add-month,-week,-or-day-calendar-in-react-with-fullcalendar--7e10e8cf 

API:
https://fullcalendar.io/docs

use reactstrap form:
https://reactstrap.github.io/components/form/


*/

// replace with bringing up popup window later

export class CalendarPage extends Component {
  
  componentDidMount() {
      window.scrollTo(0, 0);
    }

    constructor(props) {
      super(props);

      this.state = {
        modal: false
      }

      this.closeModal = this.closeModal.bind(this);
    }    

    closeModal = () => {
      this.setState({
        modal: false
      });
    }

    addEvent = () => {
      this.setState({
        modal: true
      });
    }

    render() {
      var events = [
        { title: "today's event", date: new Date() }
      ];

      let renderModal;
      if (this.state.modal) {
          renderModal = <RenderEventModal modal={this.state.modal} closeModal={this.closeModal}/>;
      } else {
          renderModal = "";
      }

      return (
        /* */
        <div id="calendarPage">
          <div className="App">
          <h1>Hello!! </h1>
          {/* <h1>Hello!! {this.props.user.displayName}</h1> */}
        </div>

          <div id = "buttons" align="right">
          <Button onClick={this.addEvent} color="primary">+ Add a Schedule</Button>
          <Button onClick={this.sayHello} color="secondary">&#x1f5b6; Print?</Button>
          </div>
          {renderModal}
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[timeGridPlugin]}
            events={events}
          />
          <div className="gerbilNote"> 
            <div className="button">
              Coming Up Next Week
              <Button onClick={this.sayHello} color="secondary">+ Add a Note</Button>
            </div>
          </div>
        </div>
      );
    }
}



class RenderEventModal extends Component {
  constructor(props) {
      super(props);
      this.state = {
          newEvent: {}
      };
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.closeModal}>
            <ModalHeader toggle={this.props.closeModal} className="gerbil-text-1">Add Event Modal</ModalHeader>
            <ModalBody>
                
            </ModalBody>
          </Modal>
      </div>
    );
  }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<CalendarPage />, rootElement);
