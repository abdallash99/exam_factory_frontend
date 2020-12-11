import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
const CreateQuestion = ({ handleClose, show }) => {
    const [body, setBody] = useState({
        question: '',
        answers: ['', ''],
        correct: null
    })

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                                Question Body
                            </Form.Label>
                            <Form.Control type='text' name='' />

                        </Form.Group>
                        <Form.Group controlId="correct">
                            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                                Correct Answer
                            </Form.Label>
                            <Form.Control
                                as="select"
                                className="mr-sm-2"
                                id="inlineFormCustomSelect"
                                custom
                            >
                                {
                                    body.answers.map((item, index) => <option key={index} value={index}>{index}</option>)
                                }
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateQuestion
