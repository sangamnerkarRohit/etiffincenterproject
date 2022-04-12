import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-Tiffin Center</Navbar.Brand>
        <Nav className="me-auto" style={{fontSize:"150%"}}>
          <Nav.Link href="login_page">Login</Nav.Link>
          <Nav.Link href="signup_page">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;