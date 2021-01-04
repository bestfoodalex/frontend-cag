import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Chomsky from '../../images/chomsky_king.png';

function Profile (props) {
    const artistInfo = props.info();
    return (
        <Container className="margin-container">
        <h2 className="tagline">Your Profile</h2>
        <Row>
            {/*Profile pic and info*/}
            <Col lg={4}>
            <Image src={Chomsky} width="100%" alt="your profile"/>
            <div className="profile-shadow">
            <p>Height: {artistInfo.height}</p>
            <p>Ethnicity: {artistInfo.ethnicity.join(' , ') || ""}</p>
            <p>Agency: {artistInfo.equityStatus }</p>
            <p>Equity Status: {artistInfo.equityStatus}</p>
            <p>Vocal Range: {artistInfo.vocalRange}</p>
            </div>
            </Col>
            {/*Bio and Stuff*/}
            <Col lg={8}>
            <div><span className="font-title-profile">{artistInfo.firstName+" "+artistInfo.lastName} </span>
            <span><span className="font-pronouns">{artistInfo.pronouns}</span></span>
            </div>
            <br/>
            <h2 className="skills">{artistInfo.skills.join(',')}</h2>
            <br/>
            <p>{artistInfo.bio}</p>
            </Col>
        </Row>
        </Container>
    )
}

export default Profile;
