import React from 'react';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

const SignUpForm = props => (

    <form onSubmit={props.handleSubmit}>
        <FormGroup>
          <ControlLabel>Enter Your Email Address</ControlLabel>
          <FormControl
            type="text"
            placeholder="yourname@email.com"
            id="email"
          />
          <ControlLabel>Choose A Username</ControlLabel>
          <FormControl
            type="text"
            placeholder="Namey McNameface"
            id="username"
          />
          <ControlLabel>Choose A Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="superSecretPassword"
            id="password"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>

)

export default SignUpForm;