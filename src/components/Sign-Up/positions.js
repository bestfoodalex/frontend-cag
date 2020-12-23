import React,{useState} from 'react';
import Holder1 from './holder-1';
import Yellow_Blob_2 from '../../images/yellow_blob_2.svg';
import Dancer from '../../images/wwww-2.svg';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


function Positions(props) {
    const [skills,setSkills] = useState([]);
    var skill ="";

    function addSkill() {
        setSkills(s => [...s,skill]);
        props.handleSkill(skill);
    }

    function skillHolder(e) {
        skill = e.target.value;
    }

  return (
      <Holder1 
      greeting=""
      title="WHAT ROLES FIT YOU"
      tagline="List some of the general roles that best suit you"
      comp={
      <Row>
          <Col lg={6}>
          <Form>
          <Form.Label>Performing Titles</Form.Label>
          <Form.Control 
            type="text" 
            name="height" 
            onChange={skillHolder}
            />
            <Button size="sm" onClick={addSkill}>ADD</Button>
            </Form>
            {skills.map(name => {
                return(<Badge className="pill-margin" pill variant="primary">{name}</Badge>)
            })}
          </Col>
      </Row>
      }
        blob={Yellow_Blob_2}
        dancer={Dancer}
      />
  )
}

export default Positions;