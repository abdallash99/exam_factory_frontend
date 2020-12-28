import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getExamGrade } from '../../action/exam'
import { connect } from 'react-redux';
import MySpinner from '../layout/Spinner';
const ExamGrade = ({ getExamGrade, examGrade, match }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getExamGrade(match.params.id, setLoading)
        // eslint-disable-next-line
    }, [])
    if (!examGrade)
        return <h1>No One Attempt Your Exam</h1>
    if (examGrade && examGrade.length === 0)
        return <h1>No One Attempt Your Exam</h1>
    return (
        loading ? <MySpinner /> :
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>email</th>
                        <th>start Date</th>
                        <th>end Date</th>
                        <th>status</th>
                        <th>grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        examGrade.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.email}</td>
                                <td>{item.startDate}</td>
                                <td>{item.endDate}</td>
                                <td>{item.status}</td>
                                <td>{item.grade}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
    )
}
const mapStateToProps = (state) => ({
    examGrade: state.exams.examGrade
});
export default connect(mapStateToProps, { getExamGrade })(ExamGrade)
