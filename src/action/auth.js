import { Auth } from 'aws-amplify';
import { LOGIN, LOGIN_FAIL, LOGUT, SIGNUP, SIGNUP_FAIL, LOAD, LOAD_FAIL, SET_ALERT } from './type';
import { setAlert } from './alert';
export const login = ({ email, password }, setLoading) => async dispatch => {
    try {
        const user = await Auth.signIn(email, password);
        dispatch({ type: LOGIN, payload: user })

    } catch (e) {
        dispatch({ type: LOGIN_FAIL })
        setLoading(false)
        dispatch(setAlert(e.message, 'danger'), { type: SET_ALERT })
    }
}

export const logout = () => async dispatch => {
    try {
        await Auth.signOut();
        dispatch({ type: LOGUT })
    } catch (e) {
        dispatch({ type: LOGUT })
    }
}


export const signup = (body, setLoading, history) => async dispatch => {
    try {
        const user = await Auth.signUp({ username: body.email, password: body.password });
        dispatch({ type: SIGNUP, payload: user.userConfirmed })
        dispatch(setAlert('You have register successfully check your email to vertify it', 'success'));
        setLoading(false)
        history.push('/login')
    } catch (e) {
        dispatch({ type: SIGNUP_FAIL, payload: false })
        setLoading(false)
        dispatch(setAlert(e.message, 'danger'), { type: SET_ALERT })
    }
}

export const load = () => async dispatch => {
    try {
        await Auth.currentSession();
        const user = await Auth.currentUserInfo();
        dispatch({ type: LOAD, payload: user })
    } catch (e) {
        dispatch({ type: LOAD_FAIL })
    }
}
