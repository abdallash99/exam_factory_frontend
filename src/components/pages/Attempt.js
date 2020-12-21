import React, { useState, useEffect } from 'react'
import Timer from './../attempt/Timer';
import { QuestionBody } from './../attempt/QuestionBody';
import { connect } from 'react-redux';
import { getExamQuestions } from './../../action/question';
import MySpinner from '../layout/Spinner';
import Pagination from './../attempt/Pagination';
const Attempt = ({ match, getExamQuestions, exam, questions, history }) => {
    let item = {
        answers: []
    }, size = 0;
    const [loading, setLoading] = useState(true)
    const [select, setSelect] = useState(item.correct)
    const [page, setPage] = useState(0);
    useEffect(() => {
        setLoading(true)
        getExamQuestions(match.params.id, setLoading, history)

        // eslint-disable-next-line
    }, [])
    if (questions && questions.length > 0) {
        item = questions[page]
        size = questions.length;
    } else if (exam && questions.length === 0 && !loading)
        return <h2>This exam dont have any question</h2>


    return (
        loading ? <MySpinner /> :
            <>
                <Timer endDate={exam.endDate} />
                <QuestionBody select={select} setSelect={setSelect} item={item} page={page} />
                <Pagination setPage={setPage} selectItem={select} setSelect={setSelect} page={page} item={item} size={size} />
            </>

    )
}
const mapStateToProps = (state) => ({
    questions: state.attempt.questions,
    exam: state.attempt.exam
});
export default connect(mapStateToProps, { getExamQuestions })(Attempt)
