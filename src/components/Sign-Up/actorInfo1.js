import React from 'react';
import Holder1 from './holder-1';
import Yellow_Blob_2 from '../../images/yellow_blob_2.svg';
import Dancer from '../../images/wwww-1.svg';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ActorInfo1(props) {
  return (
      <Holder1 
      greeting=""
      title="LET'S GET SOME DETAILS"
      tagline=""
      comp={
      <Row>
          <Col lg={6}>
          <Form>
          <Form.Label>Pronouns</Form.Label>
          <Form.Control 
            as="select" 
            name="pronouns" 
            onChange={props.handleStrings}
            >
            <option value={"She/Her"}>She/Her</option>
            <option value={"He/Him"}>He/Him</option>
            <option value={"They/Them"}>They/Them</option>
            <option value={"Other"}>Other</option>
            </Form.Control>
          <Form.Label>Do you identify as part of the LGBTQIA+ community? </Form.Label>
          <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadiosa"
          id="formHorizontalRadios1a"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadiosa"
          id="formHorizontalRadios2a"
        />
        <Form.Check
          type="radio"
          label="I do not wish to respond"
          name="formHorizontalRadiosa"
          id="formHorizontalRadios3a"
        />
          <Form.Label>Do you identify as a person of color?</Form.Label>
          <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="I do not wish to respond"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
    <Form.Label>Select all that apply:</Form.Label>
    <Form.Check
        type="checkbox"
        label="American Indian or Alaska Native"
        name="ethnicity"
        value="American Indian or Alaska Native"
        onClick={props.handleAppend}
      />
      <Form.Check
        type="checkbox"
        label="Asian"
        name="ethnicity"
        value="Asian"
        onClick={props.handleAppend}
      />
      <Form.Check
        type="checkbox"
        label="Black of African American"
        name="ethnicity"
        onClick={props.handleAppend}
        value="Black of African American"
      />
      <Form.Check
        type="checkbox"
        label="Hispanic or Latino"
        name="ethnicity"
        value="Hispanic or Latino"
        onClick={props.handleAppend}
      />
      <Form.Check
        type="checkbox"
        label="Native Hawaiian or Other Pacific Islander"
        name="ethnicity"
        value="Native Hawaiian or Other Pacific Islander"
        onClick={props.handleAppend}
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

export default ActorInfo1;