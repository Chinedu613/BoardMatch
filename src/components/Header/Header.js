import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './../../image/BoardMatchLogo2.png';

function Header() {

const Search = () => {
    return (
        <form classNameName="d-flex">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}

const LoginBtn = () => {
    return (
        <form className="container-fluid justify-content-end">
            <button className="btn btn-outline-success me-2" type="button">Main button</button>
        </form>
    )
}

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img src={logo} width="300" height="300" className="d-inline-block align-top" alt="Matchboard logo" />
 </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
 
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
      </Navbar>
    )
}

export default Header