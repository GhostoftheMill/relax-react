import React from 'react';
import {  Link } from "react-router-dom";
import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// export default function Navbar() {
//   return (
//   <nav className="nav">
//     <ul>
//       <li>
//         <Link to="/">About</Link>
//       </li>
//       <li>
//         <Link to="/portfolio">Portfolio</Link>
//       </li>
//       <li>
//         <Link to="/contact">Contact</Link>
//       </li>
//       <li>
//         <Link to="/resume">Resume</Link>
//       </li>
//     </ul>
//   </nav>
// )
//   }

function Navbarr() {
  return (
    <Navbar bg="dark" variant= "dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  
export default Navbarr;
