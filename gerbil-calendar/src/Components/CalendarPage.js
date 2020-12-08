import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Card, CardImg, Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import ReactDOM from 'react-dom';
import { CreateEvent, CreateTask, ShowTask } from "../EventForm2.js";

import ReactDOM from 'react-dom';
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';

import '../calendarStyle.css';
import 'bootstrap/dist/css/bootstrap.css';
import AddNote from './AddANote';


/*
TUTORIAL:
https://www.newline.co/@dmitryrogozhny/how-to-add-month,-week,-or-day-calendar-in-react-with-fullcalendar--7e10e8cf 

API documentation (add event, remove event, start event time etc):
https://fullcalendar.io/docs

*/

// replace with bringing up popup window later

/* 
TO DO: add the "add a note" text section
*/
export class CalendarPage extends Component {

    constructor(props) {
      super(props);

      this.state = {
        name: "",
        modal: false,
        noteInput: null
      }

      this.closeModal = this.closeModal.bind(this);
    }  

    componentDidMount() {
      window.scrollTo(0, 0);
    }
    
    addNote = (text) => {
      this.setState({
          noteInput: text
      })
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

      console.log(this.state.noteInput);

      return (
        <div>
            <h1>Hello, {this.props.user.displayName}</h1>
            <div className="calendar-button">
              <Button onClick={this.addEvent} color="primary">+ Add a Schedule</Button>
              <Button onClick={() => window.print()} color="secondary">&#x1f5b6; Print</Button>
            </div>
          {renderModal}
          <div id="buttons" align="right">
            <CreateEvent />
            <Button color="secondary">&#x1f5b6;</Button>
          </div>
          
          
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[timeGridPlugin]}
            events={events}
            eventClick={
              function(){
                <CreateEvent />
              }
            } 
          />
          
          <div className="gerbilNote"> 
            <div className="button">
              Coming Up Next Week
            </div>
              <AddNote addNote={this.addNote}/>
            <div>
              {this.state.noteInput}
            </div>
            <div>
              <CreateTask />
              <ShowTask />
            </div>
            <div className="gerbil-img">
              <img src="/img/gerbil-image.png" alt="a gerbil's picture" />
            </div>
          </div>
        </div>
      );
    }}


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
