import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux';
import { create } from './../../action/exam';
import moment from 'moment'
const Create = ({ create, history }) => {
    const [loading, setLoading] = useState(false);
    const [startError, setStartError] = useState(false);
    const [endError, setEndError] = useState(false);
    const now = moment().format('YYYY-MM-DDTHH:mm');
    const [body, setBody] = useState({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
    })
    const onChange = (e) => setBody({ ...body, [e.target.name]: e.target.value });
    const handelSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        create(body, setLoading, history)
    }
    useEffect(() => {
        if (body.startDate.length === 0 || now > body.startDate)
            setStartError(true)
        else setStartError(false)
        if (body.endDate.length === 0 || body.startDate > body.endDate)
            setEndError(true)
        else setEndError(false)
        // eslint-disable-next-line
    }, [body.startDate, body.endDate])

    return (
        <div className="Form">
            <Form onSubmit={handelSubmit} >
                <Form.Group controlId="name">
                    <Form.Label>Exam Name <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="text" required value={body.name} onChange={onChange} name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Exam Description </Form.Label>
                    <Form.Control type="text" value={body.description} onChange={onChange} name='description' placeholder="Enter description" />
                </Form.Group>
                <Form.Group controlId="startTime">
                    <Form.Label>Start Time <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="datetime-local" isInvalid={startError} value={body.startDate} onChange={onChange} name='startDate' required placeholder="Enter description" />
                    <Form.Control.Feedback type="invalid">please fill valid start date</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="endTime">
                    <Form.Label>End Time <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="datetime-local" isInvalid={endError} value={body.endDate} onChange={onChange} name='endDate' required placeholder="Enter description" />
                    <Form.Control.Feedback type="invalid">please fill valid end date</Form.Control.Feedback>
                </Form.Group>
                <Button block variant="primary" disabled={loading || startError || endError} size="lg" type="submit">
                    {loading ? <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /> : null}{' '}
                Create
            </Button>
            </Form>
        </div>

    )
}

Create.propTypes = {
    create: PropTypes.func.isRequired,
}

export default connect(null, { create })(Create)
