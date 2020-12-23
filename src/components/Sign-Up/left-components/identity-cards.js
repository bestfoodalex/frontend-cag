import React from 'react';
import SVGLayer from '../../svg-layer';
import Row from 'react-bootstrap/Row';

function IdentityCard(props) {  
  return (
      <Row className="shadow-identity-cards" key={props.key} onClick={()=>props.handleType(props.text)}>
            <SVGLayer blob={props.blob} dancer={props.dancer}/>
            <div>
            <p>{props.text}</p>
            <div>{props.checkbox}</div>
            </div>
      </Row>  
);
}

export default IdentityCard;