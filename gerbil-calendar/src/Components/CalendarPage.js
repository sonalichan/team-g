import React, { Component } from 'react';


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
      /* */
      return (
        <div id="homePage">
          <div className="gerbil-message">
          </div>
          <div className="gerbil-img">
              <img src="/img/gerbil-image.png" alt="a gerbil's picture"/>
          </div>
        </div>
      );
    }
  }
