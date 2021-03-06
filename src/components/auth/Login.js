import React, { useState, useEffect } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from './../../action/auth';
import Alerts from './../layout/Alerts';
import { Link } from 'react-router-dom';
import logo from './whitelogo.png';
const Login = ({ login, auth, history }) => {
    const [body, setBody] = useState({
        password: '',
        email: ''
    })
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState(false);
    useEffect(() => {
        if (!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(body.email))
            setEmailError(true)
        else setEmailError(false);

        // eslint-disable-next-line
    }, [body.email])
    useEffect(() => {
        if (auth.isAuth)
            history.push('/home');
        // eslint-disable-next-line
    }, [auth.isAuth])
    const onChange = (e) => setBody({ ...body, [e.target.name]: e.target.value });
    const handelLogin = (e) => {
        e.preventDefault()
        setLoading(true);
        login(body, setLoading);
    }
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <div className="container">
                        <Alerts />
                    </div>
                    <img className='imge' src={logo} alt='' width='250px' height='250px' style={{ alignSelf: 'center' }} />
                    <div className="Login">
                        <Form className='mt-5'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control size="lg" isInvalid={emailError} value={body.email} onChange={onChange} name='email' type="email" placeholder="Enter email" />
                                <Form.Control.Feedback type="invalid">Please fill valid email</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control size="lg" autoComplete="on" value={body.password} onChange={onChange} name='password' type="password" placeholder="Password" />
                            </Form.Group>
                            <Button block variant="primary" disabled={loading || emailError} size="lg" onClick={handelLogin} type="submit">
                                {loading ? <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                /> : null}{' '}
                                Login
                            </Button>
                            <div className='mt-2'>Don't have an account yet?<Link to='/signup'> Sign Up</Link> </div>
                        </Form>

                    </div>
                </div>
            </div>
        </section>
    );
}
Login.propTypes = {
    login: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps, { login })(Login);