import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


const Header = props => (

<Navbar inverse collapseOnSelect>
<Navbar.Header>
  <Navbar.Brand>
    <a onClick={props.handleClick} href="#brand">IA Tracker</a>
  </Navbar.Brand>
  <Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
  <Nav>
    <NavDropdown eventKey={3} title="Pages" id="nav-dropdown">
      <LinkContainer to='/'>
        <MenuItem eventKey={3.1}>Home</MenuItem>
      </LinkContainer>
      <LinkContainer to='/groups'>
        <MenuItem eventKey={3.2}>Groups</MenuItem>
      </LinkContainer>
      <LinkContainer to='/sessions'>
        <MenuItem eventKey={3.3}>Sessions</MenuItem>
      </LinkContainer>
    </NavDropdown>
  </Nav>
  <Nav pullRight>
    {(props.user) ? <LinkContainer to='/groups'><NavItem eventKey={1} onClick={props.handleClick}>
    {props.user}
  </NavItem></LinkContainer> :
    <NavItem eventKey={1} onClick={props.handleClick}>
      Log in
    </NavItem>
  }
  </Nav>
</Navbar.Collapse>
</Navbar>

)

export default Header;