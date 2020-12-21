import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import EditQuestion from './EditQuestion'
import { connect } from 'react-redux';
import { deleteQuestion } from '../../action/question'
const Question = ({ item, index, examId, deleteQuestion }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handelDelete = () => {
        deleteQuestion(examId, item.questionId)
    }
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{item.question}</td>
                <td><Button onClick={handleShow}>Edit</Button></td>
                <td><Button variant='danger' onClick={handelDelete}>Delete</Button></td>
            </tr>
            <EditQuestion examId={examId} handleClose={handleClose} handleShow={handleShow} item={item} show={show} />
        </>
    )
}

export default connect(null, { deleteQuestion })(Question)
