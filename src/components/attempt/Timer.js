import React from 'react'
import Countdown from 'react-countdown';
import { connect } from 'react-redux';
import { endExam } from '../../action/question';
import { useHistory } from 'react-router-dom';
const Timer = ({ endDate, endExam, examId }) => {
    const history = useHistory();
    const completed = () => {
        endExam(examId)
        history.push(`/grade/${examId}`)
    }
    return (
        <h3 className='text-center my-4'>
            <Countdown date={endDate} onComplete={completed} />
        </h3>
    );
}

export default connect(null, { endExam })(Timer); 