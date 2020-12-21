import { Button } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux';
import { endExam, select } from './../../action/question';
import { useHistory } from 'react-router-dom';

const Pagination = ({ setPage, page, size, select, selectItem, item, endExam }) => {
    const history = useHistory();

    const handelPrevious = () => {
        let newPage = page - 1;
        if (newPage !== -1) {
            setPage(newPage);
        }
        select(item.examId, { correct: selectItem, questionId: item.questionId })
    }
    const handelNext = () => {
        let newPage = page + 1;
        if (newPage < size) {
            setPage(newPage);
        }
        select(item.examId, { correct: selectItem, questionId: item.questionId })
    }

    const end = () => {
        select(item.examId, { correct: selectItem, questionId: item.questionId })
        endExam(item.examId);
        history.push(`/grade/${item.examId}`)
    }
    return (
        <div className='d-flex justify-content-between'>
            <Button onClick={handelPrevious} disabled={page === 0} >Previous</Button>
            {page !== size - 1 ? <Button onClick={handelNext} >Next</Button> : <Button onClick={end}>Finish</Button>}
        </div>
    )
}

export default connect(null, {
    select,
    endExam
})(Pagination)