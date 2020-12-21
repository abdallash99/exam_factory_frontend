import React, { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { update } from './../../action/question';
const CreateQuestion = ({ handleClose, show, update, examId, item }) => {
    const [body, setBody] = useState({
        question: item.question,
        answers: item.answers,
        correct: item.correct
    })
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (body.question.length === 0 || body.answers.some((item) => item.length === 0))
            setDisabled(true)
        else setDisabled(false)
    }, [body.answers, body.question])
    const onClose = (id) => {
        let answers = body.answers;
        answers = answers.filter((item, index) => index !== id);
        setBody({ ...body, answers })
    }
    const onAdd = () => {
        let answers = body.answers;
        answers.push('');
        setBody({ ...body, answers })
    }
    const onChange = (e) => { setBody({ ...body, [e.target.name]: e.target.value }) }
    const onChangeArray = (e, index) => {
        let answers = body.answers;
        let a = [...answers];
        a[index] = e.target.value;
        setBody({
            ...body, answers: a
        })
    }
    onsubmit = () => {
        update({ ...body, questionId: item.questionId }, examId)
        handleClose()
        setBody({
            question: item.question,
            answers: item.answers,
            correct: item.correct
        })
    }
    const close = () => {
        handleClose();
        setBody({
            question: item.question,
            answers: item.answers,
            correct: item.correct
        })
    }
    return (
        <>
            <Modal
                show={show}
                onHide={close}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>
                        <Form.Group>
                            <Form.Label className="mr-sm-2">
                                Question Body
                            </Form.Label>
                            <Form.Control value={body.question} onChange={onChange} type='text' name='question' />
                        </Form.Group>
                        <hr />

                        {body.answers.map((item, index) => (
                            <Form inline className='mt-3' key={index}>
                                <span className='mr-3'>answer {index + 1 + ' '}</span>
                                <Form.Control onChange={(e) => onChangeArray(e, index)} className='mr-3' value={item} type='text' name='' />
                                <button onClick={() => onClose(index)} type="button" className="close" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </Form>

                        ))}
                        <Button className='mt-3' onClick={onAdd} variant="primary">Add new Answer</Button>
                        <hr />
                        <Form.Group controlId="correct">
                            <Form.Label className="mr-sm-2">
                                Correct Answer
                            </Form.Label>
                            <Form.Control
                                as="select"
                                className="mr-sm-2"
                                custom
                                value={body.correct}
                                onChange={onChange}
                                name='correct'
                            >
                                {
                                    body.answers.map((item, index) => <option key={index} value={index}>{index}</option>)
                                }
                            </Form.Control>
                        </Form.Group>
                    </Form.Label>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button disabled={disabled} variant="primary" onClick={onsubmit}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default connect(null, { update })(CreateQuestion)
