import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import { CreateEvent, CreateTask } from "../EventForm2.js";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';

import '../calendarStyle.css';
import 'bootstrap/dist/css/bootstrap.css';

/*
TUTORIAL:
https://www.newline.co/@dmitryrogozhny/how-to-add-month,-week,-or-day-calendar-in-react-with-fullcalendar--7e10e8cf 

API documentation (add event, remove event, start event time etc):
https://fullcalendar.io/docs

*/

export class CalendarPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);

    this.state = {
      name: "",
    }
  }

    render() {
      var events = [
        { title: "today's event", date: new Date() }
      ];

      return (
        <div id="calendarPage">
          <div id="buttons" align="right">
            <CreateEvent />
            <Button color="secondary">&#x1f5b6;</Button>
          </div>
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[timeGridPlugin]}
            events={events} 
          />
          <div className="gerbilNote">
            <div className="button">
              Coming Up Next Week
              <CreateTask />
            </div>
            <div className="gerbil-img">
              <img src="/img/gerbil-image.png" alt="a gerbil's picture" />
            </div>
          </div>
        </div>
      );
    }
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(<CalendarPage />, rootElement);
