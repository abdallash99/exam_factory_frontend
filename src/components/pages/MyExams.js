import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux';
import { getMyExams } from '../../action/exam'
import MySpinner from '../layout/Spinner';
import PropTypes from 'prop-types'
import MyExam from '../exams/MyExam'
const MyExams = ({ getMyExams, myExams }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getMyExams(setLoading)
        // eslint-disable-next-line
    }, [])
    return (loading ?
        <MySpinner />
        : <Row className='mt-5'>
            {
                myExams.length === 0 ? <h1>There is no Exam to display here</h1> : myExams.map((item) => <MyExam key={item.examId} item={item} />)
            }
        </Row>
    )
}
MyExams.propTypes = {
    getMyExams: PropTypes.func.isRequired,
    myExams: PropTypes.array
};
const mapStateToProps = (state) => ({
    myExams: state.exams.myExams
});
export default connect(mapStateToProps, { getMyExams })(MyExams)
