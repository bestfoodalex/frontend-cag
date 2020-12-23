import React from 'react';
import Holder1 from './holder-1';
import Yellow_Blob_2 from '../../images/yellow_blob_2.svg';
import Dancer from '../../images/home_dance.svg';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Demographics(props) {
  return (
      <Holder1 
      greeting=""
      title="MORE INFO"
      tagline=""
      comp={
      <Row>
          <Col lg={6}>
          <Form>
          <Form.Label>Equity Status</Form.Label>
          <Form.Control 
            type="text" 
            name="equityStatus" 
            onChange={props.handleStrings}
            />
        <Form.Label>Agency</Form.Label>
          <Form.Control 
            type="text" 
            name="agency" 
            onChange={props.handleStrings}
            />
          <Form.Label>Website Link</Form.Label>
          <Form.Control 
            type="text" 
            name="website" 
            onChange={props.handleStrings}
            />
        <Form.Label>Personal Bio</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4}
            name="bio" 
            onChange={props.handleStrings}
            />
          </Form>
          </Col>
      </Row>
      }
        blob={Yellow_Blob_2}
        dancer={Dancer}
      />
  )
}

export default Demographics;