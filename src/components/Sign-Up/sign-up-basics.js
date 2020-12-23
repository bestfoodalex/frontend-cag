import React from 'react';
import Holder1 from './holder-1';
import Yellow_Blob_2 from '../../images/yellow_blob_2.svg';
import Dancer from '../../images/wwww-3.svg';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SignUpBasics(props) {
  return (
      <Holder1 
      greeting=""
      title="LET'S GET STARTED"
      tagline=""
      comp={
      <Row>
          <Col lg={6}>
          <Form>
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="text" 
            name="firstName" 
            onChange={props.handleStrings}
            id="firstName"/>
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="text" 
            name="lastName" 
            onChange={props.handleStrings}
            id="lastName"/>
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
            type="text" 
            name="email" 
            onChange={props.handleStrings}
            />
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"/>
          </Form>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I am 18 years or older" />
          </Form.Group>
        <p>Already a member? <a href="/login" id="email">Log In</a></p>
          </Col>
      </Row>
      }
        blob={Yellow_Blob_2}
        dancer={Dancer}
      />
  )
}

export default SignUpBasics;