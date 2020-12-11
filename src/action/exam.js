import { GET_MY_EXAMS, CREATE_EXAM, EXAM_FAIL, ADD_EXAM, UPDATE_EXAM, DELETE_EXAM, GET_EXAMS, SET_EXAM } from './type'
import { API } from 'aws-amplify'
import { setAlert } from './alert';
export const create = (body, setLoading, history) => async dispatch => {
    try {
        const res = await API.post('exam-service', '/exams', { body })
        dispatch(setAlert('The Exam Created Successfully', 'success'));
        dispatch({ type: CREATE_EXAM, payload: res })
        history.push('/exams')
    } catch (e) {
        setLoading(false)
        dispatch({ type: EXAM_FAIL })
    }
}

export const getMyExams = (setLoading) => async dispatch => {
    try {
        const res = await API.get('exam-service', '/exams/me')
        dispatch({ type: GET_MY_EXAMS, payload: res })
        setLoading(false)
    } catch (e) {
        console.log(e);
        dispatch({ type: EXAM_FAIL })
    }
}

export const getExams = (setLoading) => async dispatch => {
    try {
        const res = await API.get('exam-service', '/exams')
        dispatch({ type: GET_EXAMS, payload: res })
        setLoading(false)
    } catch (e) {
        dispatch({ type: EXAM_FAIL })

    }
}


export const add = (id, setLoading, history) => async dispatch => {
    try {
        const res = await API.post('exam-service', `/exams/${id}`)
        dispatch({ type: ADD_EXAM, payload: res })
        history.push('/home')
    } catch (e) {
        setLoading(false)
        if (e.response.status === 404) dispatch(setAlert('The exam id you enterd does not exist', 'danger'))
        dispatch({ type: EXAM_FAIL, payload: false })
    }
}

export const deleteExam = (id) => async dispatch => {
    try {
        await API.del('exam-service', `/exams/${id}`)
        dispatch({ type: DELETE_EXAM, payload: id })
    } catch (e) {
        //if (e.response.status === 404) dispatch(setAlert('The exam id does not exist', 'danger'))
        dispatch({ type: EXAM_FAIL, payload: false })
    }
}


export const update = (body, setLoading, history) => async dispatch => {
    try {
        console.log(body);
        const res = await API.put('exam-service', `/exams/${body.examId}`, { body })
        dispatch(setAlert('The Exam updated Successfully', 'success'));
        dispatch({ type: UPDATE_EXAM, payload: res })
        history.push('/exams')
    } catch (e) {
        setLoading(false)
        dispatch({ type: EXAM_FAIL })
    }
}

export const setExam = (body) => async dispatch => {
    try {
        dispatch({ type: SET_EXAM, payload: body });
    } catch (e) {
        dispatch({ type: EXAM_FAIL })
    }
}