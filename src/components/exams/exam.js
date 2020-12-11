import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import { deleteExam, setExam } from './../../action/exam';
import { useHistory } from 'react-router-dom';

const Exam = ({ item, setExam, deleteExam }) => {
    const history = useHistory()
    const handelDelete = () => {
        deleteExam(item.examId)
    }
    const handelUpdate = () => {
        setExam(item, history)
        history.push('/update')
    }

    return (
        <Col lg='4' md='6' sm='12'>
            <Card style={{ height: '22rem' }}>
                <Card.Body>
                    <h3 className='text-primary h2'>{item.name}</h3>
                    <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
                    <Card.Text>
                        {item.startDate}
                    </Card.Text>
                    <Card.Text>
                        {item.endDate}
                    </Card.Text>
                    <Card.Text>
                        {item.examId}
                    </Card.Text>
                    <Card.Link as={Button} block >Manage Questions</Card.Link>
                    <Button block variant='secondary' onClick={handelUpdate} >Edit Exam</Button>
                    <Button block variant='danger' onClick={handelDelete} >
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default connect(null, { deleteExam, setExam })(Exam)