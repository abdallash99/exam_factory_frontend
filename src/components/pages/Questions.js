import React, { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import CreateQuestion from '../questions/CreateQuestion';
import { connect } from 'react-redux';
import { getQuestions } from './../../action/question';
import Question from './../questions/Question';
const Questions = ({ match, getQuestions, questions }) => {
    const examId = match.params.id;
    useEffect(() => {
        getQuestions(examId)
        // eslint-disable-next-line
    }, [])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>Edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr className='text-center'>
                        <td colSpan="5">
                            <Button block variant="primary" onClick={handleShow}>
                                Add New Question
                            </Button>
                        </td>
                    </tr>
                </tfoot>
                <tbody>
                    {
                        questions.map((item, index) => <Question examId={examId} item={item} key={item.questionId} index={index} />)
                    }
                </tbody>
            </Table>
            <CreateQuestion examId={examId} handleClose={handleClose} handleShow={handleShow} show={show} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    questions: state.questions.myQuestions
});
export default connect(mapStateToProps, { getQuestions })(Questions)
