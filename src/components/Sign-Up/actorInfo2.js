import React from 'react';
import Holder1 from './holder-1';
import Yellow_Blob_2 from '../../images/yellow_blob_2.svg';
import Dancer from '../../images/wwww-3.svg';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ActorInfo2(props) {
  return (
      <Holder1 
      greeting=""
      title="LET'S GET SOME DETAILS"
      tagline=""
      comp={
      <Row>
          <Col lg={6}>
          <Form>
          <Form.Label>Height</Form.Label>
          <Form.Control 
            type="text" 
            name="height" 
            onChange={props.handleStrings}
            />
        <Form.Label>Vocal Range</Form.Label>
          <Form.Control 
            type="text" 
            name="vocalRange" 
            onChange={props.handleStrings}
            />
          </Form>
          <Form.Label>Age Range</Form.Label>
            <p className="change-font">Select up to 3 age ranges</p>
            <Form.Check
        type="checkbox"
        label="19 and younger"
      />
      <Form.Check
        type="checkbox"
        label="20-24"
      />
      <Form.Check
        type="checkbox"
        label="25-29"
      />
      <Form.Check
        type="checkbox"
        label="30-34"
      />
      <Form.Check
        type="checkbox"
        label="34-39"
      />
      <Form.Check
        type="checkbox"
        label="40-45"
      />
      <Form.Check
        type="checkbox"
        label="46-55"
      />
      <Form.Check
        type="checkbox"
        label="56+"
      />
          </Col>
      </Row>
      }
        blob={Yellow_Blob_2}
        dancer={Dancer}
      />
  )
}

export default ActorInfo2;