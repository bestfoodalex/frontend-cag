import React,{useState} from 'react';
import Holder1 from './holder-1';
import Yellow_Blob_2 from '../../images/yellow_blob_2.svg';
import Dancer from '../../images/wwww-1.svg';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ActorInfo3() {
  const componentState = {
    "transitionFlag":false,
    "nonbinaryFlag":false,
  }

  const [ component, setState ] = useState(componentState);
  return (
    <div>
      <Holder1 
      greeting=""
      title="LET'S GET SOME DETAILS"
      tagline=""
      comp={
      <Row>
          <Col lg={6}>
          <Form>
          <Form.Label>Gender Identity</Form.Label>
            <p className="change-font">First, choose your gender identity - additional options may be presented for casting purposes. 
            If other, please select the option with which you most closely identify for casting purposes.</p>
            <Form.Check
        type="checkbox"
        label="Cis Female"
      />
      <Form.Check
        type="checkbox"
        label="Cis Male"
      />
      <Form.Check
        type="checkbox"
        label="Trans Female"
        onClick={()=> setState({"transitionFlag":true})}
      />
      <Form.Check
        type="checkbox"
        label="Trans Male"
        onClick={()=> setState({"transitionFlag":true})}
      />
      <Form.Check
        type="checkbox"
        label="Non-Binary/Agender"
        onClick={()=> setState({"nonbinaryFlag":true})}
      />
      <Form.Check
        type="checkbox"
        label="I do not wish to respond"
      />
      </Form>
      {component.nonbinaryFlag &&
    <div>
      <br/>
      <Form.Label>I would also be comfortable playing roles usually played by:</Form.Label>
      <Form.Check
      type="checkbox"
      label="Women"
      onClick
    />
    <Form.Check
      type="checkbox"
      label="Men"
  
    />
    <Form.Check
      type="checkbox"
      label="Neither"
    /></div>}
    
      {component.transitionFlag &&
      <div>
        <br/>
      <Form.Label>I would also be comfortable playing roles usually played by:</Form.Label>
      <Form.Check
      type="checkbox"
      label="Yes"
      onClick
    />
    <Form.Check
      type="checkbox"
      label="No"
    /></div>}
          </Col>
      </Row>
      }
      
        blob={Yellow_Blob_2}
        dancer={Dancer}
      />
    </div>
  )
}

export default ActorInfo3;