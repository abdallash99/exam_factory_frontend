import React, { useState, useEffect } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from './../../action/auth';
const Login = ({ login, auth, history }) => {
    const [body, setBody] = useState({
        password: '',
        email: ''
    })
    const [loading, setLoading] = useState(false);
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
        <div className="Login">
            <Form className='mt-5'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control size="lg" value={body.email} onChange={onChange} name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control size="lg" autoComplete="on" value={body.password} onChange={onChange} name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Button block variant="primary" disabled={loading} size="lg" onClick={handelLogin} type="submit">
                    {loading ? <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /> : null}{' '}
                Login
            </Button>
            </Form>
        </div>
    );
}
Login.propTypes = {
    login: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps, { login })(Login);