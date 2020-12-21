import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux';
import { update } from './../../action/exam';
const Update = ({ exam, update, history }) => {
    const [loading, setLoading] = useState(false);
    const [startError, setStartError] = useState(false);
    const [endError, setEndError] = useState(false);
    const [body, setBody] = useState({
        name: exam.name,
        description: exam.description,
        startDate: exam.startDate,
        endDate: exam.endDate,
    })
    const onChange = (e) => setBody({ ...body, [e.target.name]: e.target.value });
    const handelSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        update({ ...body, examId: exam.examId }, setLoading, history)
    }
    useEffect(() => {
        if (body.startDate.length === 0)
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
                Update
            </Button>
            </Form>
        </div>
    )
}

Update.propTypes = {
    update: PropTypes.func.isRequired,
    exam: PropTypes.object
}
const mapStateToProps = (state) => ({
    exam: state.exams.exam
});
export default connect(mapStateToProps, { update })(Update)
