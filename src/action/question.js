import { CREATE_QUESTION, GET_EXAM_QUESTIONS, QUESTION_FAIL, SET_SELECT, GET_GRADE, START_EXAM, GET_QUESTIONS, DELETE_QUESTION, UPDATE_QUESTION, END_EXAM } from './type'
import { setAlert } from './alert';
import { API } from 'aws-amplify';
export const create = (body, id) => async dispatch => {
    try {
        const res = await API.post('question-service', `/${id}/questions`, { body })
        dispatch(setAlert('The Question Created Successfully', 'success'));
        dispatch({ type: CREATE_QUESTION, payload: res })
    } catch (e) {
        dispatch({ type: QUESTION_FAIL })
    }
}

export const getExamQuestions = (id, setLoading, history) => async dispatch => {
    try {
        await API.get('result-service', `/attempt/${id}`)
        const res = await API.get('result-service', `/attemptq/${id}`)
        dispatch({ type: GET_EXAM_QUESTIONS, payload: res })
        setLoading(false)
    } catch (e) {
        console.log(e);
        dispatch({ type: QUESTION_FAIL })
        history.push('/home')
    }
}

export const getQuestions = (id, setLoading) => async dispatch => {
    try {
        const res = await API.get('question-service', `/${id}/myquestions`)
        dispatch({ type: GET_QUESTIONS, payload: res })
        setLoading(false)
    } catch (e) {
        dispatch({ type: QUESTION_FAIL })

    }
}

export const startExam = (id) => async dispatch => {
    try {
        const res = await API.get('result-service', `/attempt/${id}`)
        dispatch({ type: START_EXAM, payload: res })
    } catch (e) {
        dispatch({ type: QUESTION_FAIL })

    }
}


export const deleteQuestion = (id, questionId) => async dispatch => {
    try {
        await API.del('question-service', `/${id}/questions/${questionId}`)
        dispatch(setAlert('Question Deleted Successfully', 'success'))
        dispatch({ type: DELETE_QUESTION, payload: questionId })
    } catch (e) {
        dispatch({ type: QUESTION_FAIL })
    }
}


export const update = (body, id) => async dispatch => {
    try {

        const res = await API.put('question-service', `/${id}/questions/${body.questionId}`, { body })
        dispatch(setAlert('The Question updated Successfully', 'success'));
        dispatch({ type: UPDATE_QUESTION, payload: res })
    } catch (e) {
        dispatch({ type: QUESTION_FAIL })
    }
}

export const select = (id, body) => async dispatch => {
    try {
        await API.post('result-service', `/attempt/${id}`, { body })
        dispatch({ type: SET_SELECT, payload: body })
    } catch (e) {
        dispatch({ type: QUESTION_FAIL })
    }
}

export const endExam = (id) => async dispatch => {
    try {
        await API.get('result-service', `/end/${id}`)
        dispatch({ type: END_EXAM })
        dispatch(setAlert('Exam Submited Successfully', 'success'))
    } catch (e) {
        dispatch({ type: QUESTION_FAIL })
    }
}

export const getGrade = (id, setLoading) => async dispatch => {
    try {
        const grade = await API.get('result-service', `/grade/${id}`)
        setLoading(false)
        dispatch({ type: GET_GRADE, payload: grade.finalGrade })
    } catch (e) {
        setLoading(false)
        dispatch({ type: QUESTION_FAIL })
    }
}