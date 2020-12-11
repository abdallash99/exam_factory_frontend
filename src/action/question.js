import { CREATE_QUESTION, GET_EXAM_QUESTIONS, QUESTION_FAIL, GET_QUESTIONS, DELETE_QUESTION, UPDATE_QUESTION } from './type'
import { setAlert } from './alert';
import { API } from 'aws-amplify';
export const create = (body, id) => async dispatch => {
    try {
        const res = await API.post('question-service', `/exams/${id}/questions`, { body })
        dispatch(setAlert('The Question Created Successfully', 'success'));
        dispatch({ type: CREATE_QUESTION, payload: res })
    } catch (e) {
        dispatch({ type: QUESTION_FAIL })
    }
}

export const getExamQuestions = (id, setLoading) => async dispatch => {
    try {
        const res = await API.get('question-service', `exams/${id}/questions`)
        dispatch({ type: GET_EXAM_QUESTIONS, payload: res })
        setLoading(false)
    } catch (e) {
        console.log(e);
        dispatch({ type: QUESTION_FAIL })
    }
}

export const getQuestions = (id, setLoading) => async dispatch => {
    try {
        const res = await API.get('question-service', `exams/${id}/myquestions`)
        dispatch({ type: GET_QUESTIONS, payload: res })
        setLoading(false)
    } catch (e) {
        dispatch({ type: QUESTION_FAIL })

    }
}


export const deleteQuestion = (id, questionId) => async dispatch => {
    try {
        await API.del('question-service', `exams/${id}/questions/${questionId}`)
        dispatch({ type: DELETE_QUESTION, payload: id })
    } catch (e) {
        dispatch({ type: QUESTION_FAIL })
    }
}


export const update = (id, body, setLoading) => async dispatch => {
    try {
        const res = await API.put('question-service', `exams/${id}/questions/${body.questionId}`, { body })
        dispatch(setAlert('The Question updated Successfully', 'success'));
        dispatch({ type: UPDATE_QUESTION, payload: res })
    } catch (e) {
        setLoading(false)
        dispatch({ type: QUESTION_FAIL })
    }
}