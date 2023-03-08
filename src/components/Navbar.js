import React from 'react';
import {  Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar= () =>{
  return (
  <nav className="nav">
    <ul>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  </nav>
)
  }
  
export default Navbar;
