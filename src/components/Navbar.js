import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";

const LOGO_SRC = "/abtech.svg";

const Navbar = () => {
  return (
    <BSNavbar expand="lg" className="navBar rounded-bottom">
      <Container>
        <BSNavbar.Brand
          as={Link}
          to="/"
          className="brandLink d-flex align-items-center gap-2"
        >
          {/* Option A: <img> from /public */}
          <img
            src={LOGO_SRC}
            alt="Blazer AI logo"
            height="60"
            width="60"
            className="d-inline-block align-text-top"
            loading="eager"
            decoding="async"
          />


          <h1 className="fw-bold" style={{ fontSize: '2rem', transform: 'translateY(5px)', marginRight: '4px' }}>Blazer AI</h1>
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="navLinker">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/aboutUs" className="navLinker">
              About
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
