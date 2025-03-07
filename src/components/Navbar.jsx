import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavigationBar = () => {
  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      className="custom-navbar"
    >
      <Container className="navbar-color py-4">
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex w-100 justify-content-center align-items-center">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/">About Us</Nav.Link>
            <Nav.Link as={Link} to="/">Owners</Nav.Link>
            <Nav.Link as={Link} to="/">Tenants</Nav.Link>
            <Nav.Link as={Link} to="/">Properties</Nav.Link>
          </Nav>
          </div>
          <Button  as={Link} to="/" className="button-nav">
            Start Treatment
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;