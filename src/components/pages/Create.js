import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux';
import { create } from './../../action/exam';

const Create = ({ create, history }) => {
    const [loading, setLoading] = useState(false);

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
    return (
        <div className="Form">
            <Form onSubmit={handelSubmit} >
                <Form.Group controlId="name">
                    <Form.Label>Exam Name <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="text" value={body.name} onChange={onChange} name='name' required placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Exam Description <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="text" value={body.description} onChange={onChange} required name='description' placeholder="Enter description" />
                </Form.Group>
                <Form.Group controlId="startTime">
                    <Form.Label>Start Time <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="datetime-local" value={body.startDate} onChange={onChange} name='startDate' required placeholder="Enter description" />
                </Form.Group>
                <Form.Group controlId="endTime">
                    <Form.Label>End Time <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="datetime-local" value={body.endDate} onChange={onChange} name='endDate' required placeholder="Enter description" />
                </Form.Group>
                <Button block variant="primary" disabled={loading} size="lg" type="submit">
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
