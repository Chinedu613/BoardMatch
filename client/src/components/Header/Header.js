import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './../../image/BoardMatchLogo2.png';


function Header() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
            <img src={logo} width="120" height="80" className="d-inline-block align-top" alt="Matchboard logo" />
        </Navbar.Brand>
          <Nav>
            <button  className="btn btn-primary m-4" style={{backgroundColor: "black"}}><Nav.Link href="/login">Login</Nav.Link></button>
            <button className="btn btn-primary m-4" style={{backgroundColor: "black"}}>
                <Nav.Link href="/signup">
                    Sign Up
                    </Nav.Link>
            </button>
          </Nav>
      </Navbar>
    )
}

export default Header