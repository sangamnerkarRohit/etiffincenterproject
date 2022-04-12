import React from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="container-fluid">
      <Navbar.Brand href="#">E-tiffin Center</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Nav.Link href="showcenterslist">Home</Nav.Link>
        <Nav.Link href="registercenter">Register Center</Nav.Link>
        <Nav.Link href="showrecievedorders">Show Orders</Nav.Link>
        <Nav.Link href="aboutus">About-us</Nav.Link>
        <Nav.Link href="customercare">contact-us</Nav.Link>
        <Nav.Item className="ml-auto" style={{marginRight:"5%"}}>
          <NavDropdown
            title={sessionStorage.getItem("fullName")}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="profilepage">Profile</NavDropdown.Item>
            <NavDropdown.Item href="customercare">Customer-Care</NavDropdown.Item>
            <NavDropdown.Item href="login_Page">Logout</NavDropdown.Item>
            
          </NavDropdown>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
