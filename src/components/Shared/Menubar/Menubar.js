import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css';
import logo from '../../../images/Logo (2).png';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Menubar = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar fixed="top" className="bg-color" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img className="logo" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 nav-link"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        {user.displayName ? <button className="log-out-btn" onClick={logOut}>Log out</button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <li className="user-show">{user?.displayName}</li>
                        
                        
                        
                
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;