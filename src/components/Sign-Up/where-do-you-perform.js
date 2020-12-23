import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Yellow_blob from '../../images/yellow_blob_1.svg';
import WAW_dance from '../../images/waw_dance.svg';
import Holder1 from './holder-1';

import Green_blob from '../../images/green_blob.svg';
import Blue_blob from '../../images/blue_blob.svg';
import Onstage from '../../images/onstage.svg';
import Backstage from '../../images/backstage.svg';
import IdentityCard from './left-components/identity-cards';

const types = [
  {id:1,blob:Green_blob,dancer:Onstage,text:"On-Stage"},
  {id:2,blob:Blue_blob,dancer:Backstage,text:"Backstage"},
]

export default function WherePerform(props) {
return (
  <Holder1
  subtitle=""
  title="WHERE DO YOU PERFORM?"
  tagline="On-stage? Backstage? Both?"
  blob={Yellow_blob}
  dancer={WAW_dance}
  comp={
    <Row>
    {
    types.map(who=>(
      <Col lg={3} className="margin-identity-cards" key={who.id}>
        <IdentityCard 
        handleType={props.handleType}
        blob={who.blob} 
        dancer={who.dancer} 
        text={who.text}
        name={who.id}
        />
      </Col>
    ))
  }
    </Row>
  }
  />
)
}


