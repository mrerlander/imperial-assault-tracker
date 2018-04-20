import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';


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
      <MenuItem eventKey={3.1}>Home</MenuItem>
      <MenuItem eventKey={3.2}>Groups</MenuItem>
      <MenuItem eventKey={3.3}>Sessions</MenuItem>
    </NavDropdown>
  </Nav>
  <Nav pullRight>
    <NavItem eventKey={1} onClick={props.handleClick}>
      Log in
    </NavItem>
  </Nav>
</Navbar.Collapse>
</Navbar>

)

export default Header;