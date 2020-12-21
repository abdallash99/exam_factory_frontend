import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux';
import { getExams } from '../../action/exam'
import MySpinner from '../layout/Spinner';
import PropTypes from 'prop-types'
import HomeExam from './../exams/HomeExam';
const Home = ({ getExams, myExams }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getExams(setLoading)
        // eslint-disable-next-line
    }, [])
    return (loading ?
        <MySpinner />
        : <Row className='mt-5'>
            {
                myExams.length === 0 ? <h1>There is no Exam to display here</h1> : myExams.map((item) => <HomeExam key={item.examId} item={item} />)
            }
        </Row>
    )
}
Home.propTypes = {
    getMyExams: PropTypes.func,
    myExams: PropTypes.array
};
const mapStateToProps = (state) => ({
    myExams: state.exams.Exams
});
export default connect(mapStateToProps, { getExams })(Home)
