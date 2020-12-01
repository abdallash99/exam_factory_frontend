import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
const NavBar = () => {
    return (
        <Navbar bg="primary" expand="lg">
            <div className="container">
                <Navbar.Brand style={{ fontSize: '1.5rem' }} href="#home">Exam Factory</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{ fontSize: '1rem' }}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">My Exams</Nav.Link>
                        <Nav.Link href="#link">Create</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavBar;