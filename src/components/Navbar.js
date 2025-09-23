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
            height="75"
            width="75"
            className="d-inline-block align-text-top"
            loading="eager"
            decoding="async"
          />

          {/* Option B: inline ReactComponent SVG
              <Logo style={{ height: 36, width: 36 }} className="d-inline-block align-text-top" />
          */}

          <span className="fs-1 fw-bold">Blazer AI</span>
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="navLinker">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/aboutUs" className="navLinker">
              About Us
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;