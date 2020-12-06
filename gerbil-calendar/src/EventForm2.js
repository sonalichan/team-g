import React, { useState, Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
            newEvent: {
                id: '', // 'a',
                title: '',// 'EVENT TITLE',
                start: '',  // '2019-08-12T11:30:00',
                end: '', // '2019-08-12T11:30:00',
                description: '', // 'Test Description'
            }
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
    addNewEvent = () => {
        console.log(this.state.newEvent)

        // to close modal: set 
        // {
        //     key: {},
        //     key: {},
        // }



        // user --> updateing the database using the AddNewEvent funtion --> database is updated!
        // 
        /* () => {
            let newEventKey = firebase.database().ref().child('posts').push().key;
            let updates = {};
            // push a newly created event to firebase
            updates['/user/"UID"/events' + newEventKey] = this.state.newEvent;
            firebase.database().ref().update(updates);
            this.setState({ modal: false, newEvent: {} })
        }
    ) */
    }

    // remove specified event. when finding event with matching id, remove event
    // event.remove() and calendar.getEventById( id )
    removeEvent = () => {
        /* 
        user clicks on event on calendar to remove
        modal pops up with all saved event information

        if (user clicks on button to remove specified event){
            event.remove()
        } 

        */
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
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

/* WORK ON THIS LATER!!!!!!!!!!!!!! 
NOT CONNECTED TO FULLCALENDAR- DONT NEED TO WORRY ABOUT CONNECTION

in CreateTask, store:
Note
Date (OPTIONAL)
*/
export class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            newEvent: {}
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

    addNewTask = () => {
        this.setState({
            newTask: {
                ...this.state.newTask,

                /* location: this.state.newEvent.place + ", " + this.state.newEvent.city + ", " + this.state.newEvent.state,
                dmyTime: this.state.newEvent.dayOfTheWeek + ", " + this.state.newEvent.abrMonthText + " " + this.state.newEvent.date + ", " + this.state.newEvent.year + " " + this.state.newEvent.time,
                organizer: this.props.user.uid */
            }
        },
            // push new Task to firebase
            () => {
                let newEventKey = firebase.database().ref().child('posts').push().key;
                let updates = {};
                updates['/allData/events/' + newEventKey] = this.state.newEvent;
                firebase.database().ref().update(updates);
                this.setState({ modal: false, newEvent: {} })
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