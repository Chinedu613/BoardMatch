import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './../../image/BoardMatchLogo2.png';
import Users from "../../utils/Users";


function LogHeader() {
    function handleLogout(){
        Users.logout();
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
            <img src={logo} width="120" height="80" className="d-inline-block align-top" alt="Matchboard logo" />
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/search">Search Games</Nav.Link>
            <Nav.Link href="/game">Matches</Nav.Link>
 
          </Nav>
          <Nav>
            <button  className="btn btn-primary m-4" style={{backgroundColor: "black"}} onClick={handleLogout}><Nav.Link href="/">Logout</Nav.Link></button>
          </Nav>
      </Navbar>
    )
}

export default LogHeader