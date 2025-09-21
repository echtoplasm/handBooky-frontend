import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BSNavbar expand="lg" className="navBar rounded-bottom">
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="brandLink fs-1 fw-bold">blazer</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="navLinker">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/aboutUs" className="navLinker">About Us</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
