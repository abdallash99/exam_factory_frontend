import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getGrade } from './../../action/question';
const Grade = ({ getGrade, grade, match }) => {
    const examId = match.params.id;
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getGrade(examId, setLoading);
        // eslint-disable-next-line
    }, [])
    return (
        loading ? <Spinner /> :
            <h3 className='text-primary'>
                Your Grade is {grade}
            </h3>
    )
}
const mapStateToProps = (state) => ({
    grade: state.attempt.grade
});
export default connect(mapStateToProps, { getGrade })(Grade)
