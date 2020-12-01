import React, { useState } from 'react';
// import firebase from 'firebase/app';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


/* Reactstrap form:
https://reactstrap.github.io/components/form/ */

export const CreateEvent = (props) => {
    const {
        // buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

    return (
        <div>
      <Button color="danger" onClick={toggle}>+ Add A Schedule</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <Form>
            <div>
                <h1>"Tell me more about the Event!" / x button</h1>
            </div>
            <FormGroup>
                <Label for="exampleText">What would you like to call this event?</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDate">When is the Event?</Label>
                <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="startTime">Start Time</Label>
                <Input
                    type="time"
                    name="time"
                    id="startTime"
                    placeholder="time placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="endTime">End Time</Label>
                <Input
                    type="time"
                    name="time"
                    id="endTime"
                    placeholder="time placeholder"
                />
            </FormGroup>
            <FormGroup tag="fieldset" row>
                <legend className="col-form-label col-sm-2">Is this a repeated Event?</legend>
                <Col sm={10}>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio2" />{' '}
              Yes
            </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio2" />{' '}
              No
            </Label>
                    </FormGroup>
                </Col>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">What is the Event About?</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <div>
                <Button outline color="primary">Cancel</Button>{' '}
                <Button outline color="secondary">Add to Schedule</Button>{' '}
            </div>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    );
}

export const CreateTask = (props) => {
    const {
        // buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>+ Add a Note</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>MAKE TASK</ModalHeader>
                <ModalBody>
                    <Form>
                        <div><h1>Coming Up Next Week</h1></div>
                        <FormGroup>
                            <Label for="exampleText">What is coming up next week?</Label>
                            <Input type="textarea" name="text" id="exampleText" />
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
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}