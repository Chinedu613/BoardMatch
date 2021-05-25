import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './../../image/BoardMatchLogo2.png';
import LoginModal from '../LoginModal';
import ModalService from '../../modules/modals/services/ModalService';

function Header() {

const addModal = () => {
    ModalService.open(LoginModal)
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
            <img src={logo} width="120" height="80" className="d-inline-block align-top" alt="Matchboard logo" />
 </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
 
          </Nav>
          <Nav>
          <button onClick={ addModal } className="btn btn-primary m-4">Login</button>
          </Nav>
      </Navbar>
    )
}

export default Header