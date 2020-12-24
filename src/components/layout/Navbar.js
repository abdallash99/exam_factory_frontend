import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../../action/auth'
import { NavLink, Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import logo from '../auth/whitelogo.png'
const NavBar = ({ auth, logout, setTheme, theme }) => {
    let history = useHistory();
    const handelLogout = () => {
        logout();
        history.push('/login');
    }
    const change = () => {
        setTheme('darkly')
    }
    return auth.isAuth ? (
        <Navbar bg="primary" variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand as={Link} style={{ fontSize: '1.5rem' }} to='/'>
                    <img src={logo} alt="" width='25px' height='25px' />
                    Exam Factory
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{ fontSize: '1rem' }}>
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/exams">My Exams</Nav.Link>
                        <Nav.Link as={NavLink} to="/create">Create</Nav.Link>
                        <Nav.Link as={NavLink} to="/add">Add Exam</Nav.Link>

                    </Nav>
                    <Nav className="ml-auto" style={{ fontSize: '1rem' }}>
                        <BootstrapSwitchButton onChange={change} onstyle="secondary" offstyle="dark" onlabel='Light' width={75} offlabel='Dark' checked={!(theme === 'flatly')} />
                        {' '}  <Nav.Link onClick={handelLogout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    ) :
        (
            <Navbar bg="primary" variant="dark" expand="lg">
                <div className="container">
                    <Navbar.Brand style={{ fontSize: '1.5rem' }} href="#home">Exam Factory</Navbar.Brand>
                </div>
            </Navbar>
        )
        ;
}
const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps, { logout })(NavBar);