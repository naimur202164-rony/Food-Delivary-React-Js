import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import useFirebase from './../../hooks/useFirebase';

const Header = () => {
    const { user, Logout } = useFirebase()

    return (
        <div>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><img className="logo-img" src="http://madang.kenzap.com/wp-content/themes/madang/images/madang-logo.svg" /></Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/myorder">Order</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                            {
                                user.email ? <Nav.Link ><button className="btn btn-light" variant="light" onClick={Logout}>LogOut</button></Nav.Link> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div >
    );
};

export default Header;