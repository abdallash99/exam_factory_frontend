import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'

export const QuestionBody = ({ setSelect, item, select, page }) => {
    useEffect(() => {
        if (item)
            setSelect(item.correct)
        // eslint-disable-next-line
    }, [page])
    if (!item) return <h1>No Question Here</h1>
    const change = (e) => {
        setSelect(e.target.value);
    }

    return (
        <div style={{ minHeight: '50vh' }}>
            <h4>{item.question}</h4>
            <Form className='mt-5'>
                <Form.Group onChange={change}>
                    {item.answers.map((element, index) => <h5 key={index}>{index + 1 + ')'} <Form.Check name='1' checked={parseInt(select) === index} value={index} type="radio" inline aria-label="radio 1" /> {element}<br /></h5>)}
                </Form.Group>
            </Form>
        </div>
    )
}
