import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

/* Reactstrap form:
https://reactstrap.github.io/components/form/ */

const CreateEvent = (props) => {
    return (
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
    );
  }
  export default CreateEvent;

  const CreateTask = (props) => {
    return (
        
    );
  }
    export default CreateTask;