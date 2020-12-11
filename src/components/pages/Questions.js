import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import CreateQuestion from '../questions/CreateQuestion';
const Questions = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>answer</th>
                        <th>Edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr className='text-center'>
                        <td colspan="5">
                            <Button block variant="primary" onClick={handleShow}>
                                Add New Question
                            </Button>
                        </td>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
            <CreateQuestion handleClose={handleClose} handleShow={handleShow} show={show} />
        </div>
    )
}

export default Questions
