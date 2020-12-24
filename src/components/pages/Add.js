import React from 'react'
import { connect } from 'react-redux';
import { add } from '../../action/exam'
import { Form, Button, Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react';
const Add = ({ add, history }) => {
    const [id, setId] = useState('');
    const onChange = (e) => setId(e.target.value);
    const [loading, setLoading] = useState(false);
    const [idError, setIdError] = useState(false);
    const handelAdd = (e) => {
        e.preventDefault()
        setLoading(true);
        add(id, setLoading, history)
    }
    useEffect(() => {
        if (!/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(id)) {
            setIdError(true)
        } else setIdError(false)
    }, [id])
    return (
        <div className="Form">
            <Form className='mt-5'>
                <Form.Group controlId="idForm">
                    <Form.Label>Exam Id</Form.Label>
                    <Form.Control size="lg" isInvalid={idError} value={id} onChange={onChange}
                        required name='id' type="text" placeholder="Enter Id" />
                    <Form.Control.Feedback type="invalid">The Input Should Be Valid UUID V4 String</Form.Control.Feedback>
                </Form.Group>
                <Button block variant="primary" disabled={loading || idError} size="lg" onClick={handelAdd} type="submit">
                    {loading ? <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /> : null}{' '}
                Add
            </Button>
            </Form>
        </div>

    )
}

export default connect(null, { add })(Add)
