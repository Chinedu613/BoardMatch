import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './../../image/BoardMatchLogo2.png';
import LoginModal from '../LoginModal';
import Users from '../../utils/Users';
import ModalService from '../../modules/modals/services/ModalService';
import { NavLink } from 'react-router-dom';


function Header() {

    


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