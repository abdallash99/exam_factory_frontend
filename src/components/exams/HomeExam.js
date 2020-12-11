import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Col } from 'react-bootstrap'
import moment from 'moment'
export const HomeExam = ({ item }) => {
    const now = moment().format('YYYY-MM-DDTHH:mm');
    return (
        <Col lg='4' md='6' sm='12' >
            <Card style={{ height: '15rem' }}>
                <Card.Body>
                    <h3 className='text-primary h2'>{item.name}</h3>
                    <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
                    <Card.Text>
                        {item.startDate}
                    </Card.Text>
                    <Card.Text>
                        {item.endDate}
                    </Card.Text>
                    {(now >= item.endDate) ? <Button as={Link} to={`/attempt/${item.examId}`}>Results</Button> : null}
                    {((now < item.endDate) && (now >= item.startDate)) ? <Button as={Link} to={`/attempt/${item.examId}`}>Attepmt</Button> : null}
                </Card.Body>
            </Card>
        </Col >

    )
}