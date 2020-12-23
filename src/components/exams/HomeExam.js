import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Col } from 'react-bootstrap'
import moment from 'moment'
import { startExam } from '../../action/question';
import { connect } from 'react-redux';
const HomeExam = ({ item, startExam }) => {
    const now = moment().format('YYYY-MM-DDTHH:mm');
    const start = () => {
        startExam(item.examId)
    }
    return (
        <Col xl='4' lg='6' md='12' className='mt-3'>
            <Card style={{ minHeight: '15rem' }}>
                <Card.Body>
                    <h3 className='text-primary h2'>{item.name}</h3>
                    <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
                    <Card.Text>
                        {item.startDate}
                    </Card.Text>
                    <Card.Text>
                        {item.endDate}
                    </Card.Text>
                    {(now >= item.endDate) ? <Button as={Link} to={`/result/${item.examId}`}>Results</Button> : null}
                    {((now < item.endDate) && (now >= item.startDate)) ? <Button as={Link} onClick={start} to={`/attempt/${item.examId}`}>Attepmt</Button> : null}
                </Card.Body>
            </Card>
        </Col >

    )
}

export default connect(null, { startExam })(HomeExam)