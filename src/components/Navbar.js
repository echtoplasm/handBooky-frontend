import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BSNavbar expand="lg" className="navBar">
      <Container>
        <BSNavbar.Brand as={Link} to="/">handyBook</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/aboutUs">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/handbooks">Handbooks</Nav.Link>
            <Nav.Link as={NavLink} to="/WebSiteHelper">Website</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
