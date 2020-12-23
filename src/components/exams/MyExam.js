import React, { useState } from 'react'
import { Card, Button, Col, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux';
import { deleteExam, setExam } from '../../action/exam';
import { useHistory } from 'react-router-dom';

const MyExams = ({ item, setExam, deleteExam }) => {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const handelDelete = () => {
        setLoading(true)
        deleteExam(item.examId, setLoading)
    }
    const handelUpdate = () => {
        setExam(item, history)
        history.push('/update')
    }
    const handelManage = () => {
        history.push(`/exams/${item.examId}/questions`)
    }

    return (
        <Col xl='4' lg='6' md='12' className='mt-3'>
            <Card className='card1' style={{ height: '22rem' }}>
                <Card.Body>
                    <h3 className='text-primary h2'>{item.name}</h3>
                    <Card.Subtitle className="mb-2 text-muted">{item.description ? item.description : <br />}</Card.Subtitle>
                    <Card.Text>
                        {item.startDate}
                    </Card.Text>
                    <Card.Text>
                        {item.endDate}
                    </Card.Text>
                    <Card.Text>
                        {item.examId}
                    </Card.Text>
                    <Card.Link as={Button} onClick={handelManage} block >Manage Questions</Card.Link>
                    <Button block variant='secondary' onClick={handelUpdate} >Edit Exam</Button>
                    <Button block variant='danger' disabled={loading} onClick={handelDelete} >
                        {loading ? <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        /> : null}{' '}
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default connect(null, { deleteExam, setExam })(MyExams)