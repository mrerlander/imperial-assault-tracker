import React from 'react';
import {Jumbotron, Button, Row, Col} from 'react-bootstrap';

const Welcome = props => (

    <Row>
    <Col xs={12}>
    <Jumbotron>
  <h1>Welcome Rebels!</h1>
  <p>
    IA Tracker makes tracking different groups and sessions of Star Wars: Imperial Assault a breeze. Log in, create your group, and enter the characters and cards for each character. When you are done, save and go. The next time you log in, all your progress will be there. Have multiple groups you are a part of? No problem. after you log in, you can select the group you are playing with that day. Current users can log in at the top of the screen; new users can sign up with the button below. 
  </p>
  <p>
    <Button onClick={props.handleSignUpClick} bsStyle="primary">Sign Up!</Button>
  </p>
</Jumbotron>
</Col>
</Row>
)

export default Welcome;