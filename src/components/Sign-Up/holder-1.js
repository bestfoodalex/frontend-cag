import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SVGLayer from '../../components/svg-layer';
import Container from 'react-bootstrap/Container';

function Holder1(props) {
  return (
    <Container className="margin-container">
    <Row>
      <div>
      <h3 className="subtitle">{props.greeting}</h3>
        <h1 className="title">{props.title}</h1>
        <h2 className="tagline">{props.tagline}</h2>
      </div>
      </Row>
      <Row>
      <Col lg={8}>
        {props.comp}
      </Col>
      <Col lg={4}>
      <SVGLayer blob={props.blob} dancer={props.dancer}/>
      </Col>
    </Row>
    </Container>

);
}

export default Holder1;
