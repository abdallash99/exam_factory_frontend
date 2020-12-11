import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../../action/auth'
import { NavLink, Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const NavBar = ({ auth, logout }) => {
    let history = useHistory();
    const handelLogout = () => {
        logout();
        history.push('/login');
    }
    return auth.isAuth ? (
        <Navbar bg="primary" variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand as={Link} style={{ fontSize: '1.5rem' }} to='/'>Exam Factory</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{ fontSize: '1rem' }}>
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/exams">My Exams</Nav.Link>
                        <Nav.Link as={NavLink} to="/create">Create</Nav.Link>
                        <Nav.Link as={NavLink} to="/add">Add Exam</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto" style={{ fontSize: '1rem' }}>
                        <Nav.Link onClick={handelLogout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    ) :
        (
            <Navbar bg="primary" variant="dark" expand="lg">
                <div className="container">
                    <Navbar.Brand style={{ fontSize: '1.5rem' }} href="#home">Exam Factory</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" style={{ fontSize: '1rem' }}>
                            <Nav.Link as={NavLink} to="/login">SignIn</Nav.Link>
                            <Nav.Link as={NavLink} to="/signup">SignUp</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
        ;
}
const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps, { logout })(NavBar);