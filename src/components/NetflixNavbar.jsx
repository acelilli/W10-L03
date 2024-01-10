import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import netLogo from "../logo.png";
import NavActions from "./NavActions";

function NetflixNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="#221f1f" data-bs-theme="dark" className="align-content-center">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={netLogo} alt="logo Netflix" style={{ height: "7vmin" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Elementi Navbar */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tv-shows">Tv Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#recently-added">Recently Added</Nav.Link>
            <Nav.Link href="#my-list">My List</Nav.Link>
            {/* Dropdown*/}
            <NavDropdown title="Sort By" id="basic-nav-dropdown">
              <NavDropdown.Item href="#genre">Genre</NavDropdown.Item>
              <NavDropdown.Item href="#most-watched">Most Watched</NavDropdown.Item>
              <NavDropdown.Item href="#most-recent">Most Recent</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#picks">Our Picks</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Azioni  */}
          <NavActions />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NetflixNavbar;
