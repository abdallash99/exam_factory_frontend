import { UPDATE_EXAM, GET_EXAMS, GET_MY_EXAMS, DELETE_EXAM, CREATE_EXAM, CREATE_FAIL } from './type'
import { API } from 'aws-amplify'
import { setAlert } from './alert';
export const create = (body, setLoading, history) => async dispatch => {
    try {
        console.log(body);
        const res = await API.post('exam-service', '/exams', { body })
        dispatch(setAlert('The Exam Created Successfully', 'success'));
        dispatch({ type: CREATE_EXAM, payload: res })
        history.push('/')
    } catch (e) {
        console.log(e);
        setLoading(false)
        dispatch({ type: CREATE_FAIL, payload: false })
    }
}