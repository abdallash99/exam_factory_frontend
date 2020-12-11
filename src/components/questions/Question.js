import React from 'react'

const Question = ({ item, index }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{item.body}</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
        </tr>
    )
}

export default Question
