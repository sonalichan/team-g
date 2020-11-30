import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import popupModal from "../popupModal";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';

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
function myFunction() {

  function sayHello() {
    alert('Test!');
  }
  
  return (
    <button onClick={sayHello}>
      Click me!
    </button>
  );
}

export class CalendarPage extends Component {
  
  componentDidMount() {
      window.scrollTo(0, 0);
    }

    constructor(props) {
      super(props);

      this.sayHello = this.sayHello.bind(this);

      this.state = {
        name: "",
      }

      handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(e) {
        this.setState({ name: this.state.modalInputName });
        this.modalClose();
      }
    
      modalOpen() {
        this.setState({ modal: true });
      }
    
      modalClose() {
        this.setState({
          modalInputName: "",
          modal: false
        });
    }
  
    sayHello() {
      alert('Test!');
    }


    render() {
      var events = [
        { title: "today's event", date: new Date() }
      ];

      return (
        /* */
        <div id="calendarPage">
          <div className="App">
          <h1>Hello!! {this.state.name}</h1>
            <a href="javascript:;" onClick={e => this.modalOpen(e)}>
              Open Modal
            </a>
          <popupModal show={this.state.modal} handleClose={e => this.modalClose(e)}>
            <h2>Hello Modal</h2>
            <div className="form-group">
              <label>Enter Name:</label>
              <input
                type="text"
                value={this.state.modalInputName}
                name="modalInputName"
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button onClick={e => this.handleSubmit(e)} type="button">
                Save
              </button>
            </div>
          </popupModal>
        </div>

          <div id = "buttons" align="right">
          <Button onClick={this.sayHello} color="primary">+ Add a Schedule</Button>
          <Button onClick={this.sayHello} color="secondary">&#x1f5b6;</Button>
          </div>
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
            <div className="gerbil-img">
              <img src="/img/gerbil-image.png" alt="a gerbil's picture"/>
            </div>
          </div>
        </div>
      );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CalendarPage />, rootElement);
