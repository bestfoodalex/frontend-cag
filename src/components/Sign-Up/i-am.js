import React from 'react';
import Green_blob from '../../images/green_blob.svg';
import Individual_Dancer from '../../images/wwww-2.svg';
import Red_blob from '../../images/red_blob.svg';
import Individual_Dancer_2 from '../../images/waw_dance.svg';
import IdentityCard from './left-components/identity-cards';
import Holder1 from './holder-1';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const types = [
  {id:1,blob:Green_blob,dancer:Individual_Dancer,text:"An Individual",checkbox:0},
  {id:2,blob:Red_blob,dancer:Individual_Dancer_2,text:"A Theatre Group",checkbox:0},
]

export default function IAm(props) {
return (
  <Holder1
  subtitle=""
  title="BUILD CONNECTIONS TODAY"
  tagline="Join the Community today for new opportunities"
  blob=""
  dancer=""
  comp={
    <>
    <h3 className="subtitle">I AM ...</h3>
    <Row>
    {
    types.map(who=>(
      <Col lg={4} className="margin-identity-cards" key={who.id}>
        <IdentityCard 
        onClick={props.handleType}
        blob={who.blob} 
        dancer={who.dancer} 
        text={who.text} 
        name={who.id}
        onClick={who.handleComponent}/>
      </Col>
    ))
  }
    </Row>
    </>
  }
  />
)}