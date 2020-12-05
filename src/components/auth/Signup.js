import React, { useState, useEffect } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { signup } from './../../action/auth';
import { connect } from 'react-redux';
const Signup = ({ signup, history, auth }) => {
    const [body, setBody] = useState({
        password: '',
        confirmPassword: '',
        email: ''
    })
    const [matchError, setMatchError] = useState(true)
    const [passwordError, setpasswordError] = useState(false)
    useEffect(() => {
        if (body.password !== body.confirmPassword)
            setMatchError(true);
        else setMatchError(false)
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(body.password))
            setpasswordError(true);
        else setpasswordError(false)
    }, [body.password, body.confirmPassword])

    const onChange = (e) => {
        setBody({ ...body, [e.target.name]: e.target.value })
    };
    const handelLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        signup(body, setLoading, history);
    }
    const [loading, setLoading] = useState(false);
    return (
        <div className="Login">
            <Form className='mt-5' >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: '1rem' }}>Email address</Form.Label>
                    <Form.Control size="lg" type="email" value={body.email}
                        onChange={onChange} name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{ fontSize: '1rem' }}>Password</Form.Label>
                    <Form.Control size="lg" autoComplete="on" isInvalid={passwordError} value={body.password} onChange={onChange} name='password' type="password" placeholder="Password" />
                    <Form.Control.Feedback type="invalid">Password Length should be more than 8 and have at least one uppercase, one spical charachter and one number</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label style={{ fontSize: '1rem' }}>Confirm Password</Form.Label>
                    <Form.Control isInvalid={matchError} size="lg" value={body.confirmPassword} onChange={onChange}
                        name='confirmPassword' autoComplete="on" type="password" placeholder="Confirm Password" />
                    <Form.Control.Feedback type="invalid">Password should be equal</Form.Control.Feedback>
                </Form.Group>
                <Button block variant="primary" size="lg" disabled={loading || matchError || passwordError} onClick={handelLogin} type="submit">
                    {loading ? <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /> : null}{' '}
                SignUp
            </Button>
            </Form>
        </div>
    );
}
Signup.propTypes = {
    signup: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps, { signup })(Signup);