import React, { useState, Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Toast, ToastHeader, ToastBody } from 'reactstrap';

import firebase from 'firebase/app';
import { render } from 'react-dom';


/* API documentation (add event, remove event, start event time etc):
https://fullcalendar.io/docs

in CreateEvent, to connect with FullCalendar, store:

id
title: EVENT TITLE (string)
start: START TIME
end: END TIME (null if not specified)
What is the event about
*/



// summarizing a single event
/* 
    {
      id: 'a',
      title: EVENT TITLE,
      start: '2019-08-12T11:30:00' ,
      end: '2019-08-12T11:30:00',
      description: 'Test Description',
    }

*/
export class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            newEvent: {}
        };

        this.toggle = this.toggle.bind(this);
    }

    // open and close popup modal  to create event
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    }

    // exit event popup modal without saving
    cancelEventCreation = () => {
        this.setState({ modal: false, newEvent: {} });
    }

    // accept 'title' from form
    addTitle = (evt) => {
        this.setState({
            newEvent: {
                ...this.state.newEvent,
                title: evt.target.value
            }
        })
    }

    addDate = (evt) => {
        this.setState({
            newEvent: {
                ...this.state.newEvent,
                date: evt.target.value
            }
        })
    }

    // accept 'start', value for starting time. NOT OPTIONAL
    // event.setStart( date, [ options ] )
    addStartTime = (evt) => {
        this.setState({
            newEvent: {
                ...this.state.newEvent,
                start: evt.target.value
            }
        })
    }
    // accept 'end time' from form. can be null- CAN BE OPTIONAL
    // event.setEnd( date )
    addEndTime = (evt) => {
        this.setState({
            newEvent: {
                ...this.state.newEvent,
                end: evt.target.value
            }
        })
    }

    // accept description from form
    addDescription = (evt) => {
        this.setState({
            newEvent: {
                ...this.state.newEvent,
                description: evt.target.value // there's no method for description like event start / event end
            }
        })
    }

    // append all info from add title, starttime, endtime, description etc.
    // accept all user input to create information for a single Event
    // user --> updateing the database using the AddNewEvent funtion --> database is updated!

    /*
          id: 'a',
      title: EVENT TITLE,
      start: '2019-08-12T11:30:00' - HOW DO I CONVERT TIME INTO THIS IF I ONLY HAVE START TIME + END TIME?
      end: '2019-08-12T11:30:00',
      description: 'Test Description', 
    */
    addNewEvent = () => {
        this.setState({
            newEvent: {

                ...this.state.newEvent,
                date: this.state.newEvent.date,
                title: this.state.newEvent.title,
                start: this.state.newEvent.date + "T" + this.state.newEvent.start + ":00",
                end: this.state.newEvent.date + "T" + this.state.newEvent.end + ":00",
                description: this.state.newEvent.description
            }
        },
            () => {
                console.log(this.state.newEvent);
                console.log(firebase.database().ref('users/' + this.props.user.uid));

                let newEventKey = firebase.database().ref('users/' + this.props.user.uid).child('events').push().key;
                let updates = {};
                // push a newly created event to firebase
                updates['/users/' + this.props.user.uid + '/events/' +  newEventKey] = this.state.newEvent;
                firebase.database().ref().update(updates);
                this.setState({ modal: false, newEvent: {} })
                /* 
                let newEventKey = firebase.database().ref().child('posts').push().key;
                let updates = {};
                // push a newly created event to firebase
                updates['/allData/events/' + newEventKey] = this.state.newEvent;
                firebase.database().ref().update(updates);
                this.setState({ modal: false, newEvent: {} }) */
            }
        )
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>+ Add A Schedule</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form>
                            <div>
                                <h1>"Tell me more about the Event!" / custom x button</h1>
                            </div>
                            <FormGroup>
                                <Label for="exampleText">What would you like to call this event?</Label>
                                <Input
                                    type="textarea"
                                    name="text"
                                    id="exampleText"
                                    onChange={this.addTitle}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleDate">When is the Event?</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="exampleDate"
                                    placeholder="date placeholder"
                                    onChange={this.addDate}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="startTime">Start Time</Label>
                                <Input
                                    type="time"
                                    name="time"
                                    id="startTime"
                                    placeholder="time placeholder"
                                    onChange={this.addStartTime}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="endTime">End Time</Label>
                                <Input
                                    type="time"
                                    name="time"
                                    id="endTime"
                                    placeholder="time placeholder"
                                    onChange={this.addEndTime}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">What is the Event About?</Label>
                                <Input
                                    type="textarea"
                                    name="text"
                                    id="exampleText"
                                    onChange={this.addDescription}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addNewEvent}>Create Event</Button>{' '}
                        <Button color="secondary" onClick={this.cancelEventCreation}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

/* WORK ON THIS LATER!!!!!!!!!!!!!! 
NOT CONNECTED TO FULLCALENDAR- DONT NEED TO WORRY ABOUT CONNECTION
*/
export class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            newTask: {}
        };

        this.toggle = this.toggle.bind(this);
    }

    // toggle modal open & close
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    }

    cancelCreateTask = () => {
        this.setState({ modal: false, newEvent: {} });
    }

    addTaskDesc = (evt) => {
        this.setState({
            newTask: {
                ...this.state.newTask,
                task: evt.target.value
            }
        })
    }

    addTaskDate = (evt) => {
        this.setState({
            newTask: {
                ...this.state.newTask,
                date: evt.target.value
            }
        })
    }

    addNewTask = () => {
        this.setState({
            newTask: {
                ...this.state.newTask,

                task: this.state.newTask.task,
                date: this.state.newTask.date
            }
        },
            // push new Task to firebase
            () => {
                let newTaskKey = firebase.database().ref().child('posts').push().key;
                let updates = {};
                updates['/allData/tasks/' + newTaskKey] = this.state.newTask;
                firebase.database().ref().update(updates);
                this.setState({ modal: false, newTask: {} })
            }
        )
    }


    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>+ Add a Note</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>MAKE TASK</ModalHeader>
                    <ModalBody>
                        <Form>
                            <div><h1>Coming Up Next Week</h1></div>
                            <FormGroup>
                                <Label for="exampleText">What is coming up next week?</Label>
                                <Input
                                    type="textarea"
                                    name="text"
                                    id="exampleText"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleDate">When is this Happening (MM/DD/YY)? Optional.</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="exampleDate"
                                    placeholder="date placeholder"
                                />
                            </FormGroup>
                        </Form >
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={this.toggle}>
                            Add Task
                        </Button>
                        <Button
                            color="secondary"
                            onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

/* allow person to click on event to view it, and exit viewing or delete.
DIFFERENT THAN MODAL TO CREATE EVENT */

export class ViewEvent extends Component {
}


/* show a text box with the "note" a person has stored on the bottom of a calendar */
export class ShowTask extends Component {
    render() {
        return (
            <div>
                <Toast>
                    <ToastHeader>
                        Coming Up Next Week
                </ToastHeader>
                    <ToastBody>
                        This textbox will display the user's Task from the Add a Note button (CreateTask)!
                        And the date
                 </ToastBody>
                </Toast>
            </div>
        );
    }
} 
