import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Card, CardImg, Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import ReactDOM from 'react-dom';
import { CreateEvent, CreateTask, ShowTask } from "../Components/EventForm2.js";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';

import '../calendarStyle.css';
import 'bootstrap/dist/css/bootstrap.css';
import AddNote from './AddANote';


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
      if(!this.props.ifLogIn){
        return(
          <div className="warning">
              <div className="warning-message gerbil-text-1">You haven't logged in yet! Click "Sign In" on the top right to let Gerbil know who you are!</div>
          </div>
        );
      }

      var events = this.props.userData.events;

      console.log(this.state.noteInput);

      return (
        <div id="calendarPage">
          <h1>Hello, {this.props.user.displayName}</h1>
          <div className="calendar-button" align="right">
            <CreateEvent 
              user={this.props.user} userData={this.props.userData} closeModal={this.closeModal} showGiftModal={this.props.showGiftModal}/>
            <Button onClick={() => window.print()} color="secondary">&#x1f5b6; Print</Button>
          </div>
          
          
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[timeGridPlugin]}
            events={events}
            allDaySlot={false}
            slotMinTime="7:00:00"
            slotMaxTime="24:00:00"
            slotEventOverlap={false}
            height="auto" 
          />
          
          <div className="gerbilNote"> 
            <div id="addNote">
              <h2>Coming Up Next Week</h2>
              <div id="noteButton">
                <AddNote addNote={this.addNote}/>
                {this.state.noteInput}
              </div>
            </div>
            <div id="task">
              <CreateTask 
                user={this.props.user}/>
              <ShowTask 
                userData={this.props.userData}
              />
            </div>
            <div className="gerbil-img">
              <img src="/img/gerbil-image.png" alt="a gerbil's picture" />
            </div>
          </div>
        </div>
      );
    }}


  const rootElement = document.getElementById("root");
  ReactDOM.render(<CalendarPage />, rootElement);
