import React, { Component } from 'react';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export class CalendarPage extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    /* 

    class Calendar {
      const calendar = document.querySelector("#app-calendar");
      for (let day = 1; day <= 7; day = day++) {
        console.log(day)
        calendar.insertAdjacentHTML("beforeend", '<div class="day">${day}</div>')
      }
    } */
    
  
    render() {
      var events = [
        { title: "today's event", date: new Date() }
      ];

      /* */
      return (
        <div id="calendarPage">
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            events={events}
          />
        </div>
      );
    }
}

