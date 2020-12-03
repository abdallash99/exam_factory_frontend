import { Auth, API } from 'aws-amplify';
import { LOGIN, LOGIN_FAIL, LOGUT, SIGNUP, SIGNUP_FAIL, LOAD, LOAD_FAIL, SET_ALERT, GET_USERS, GET_USERS_FAIL } from './type';
import { setAlert } from './alert';
import config from './../config';
export const login = ({ email, password }, setLoading) => async dispatch => {
    try {
        await Auth.signIn(email, password);
        const user = await Auth.currentAuthenticatedUser();
        const groups = user.signInUserSession.accessToken.payload["cognito:groups"]
        dispatch({ type: LOGIN, payload: groups.length !== 0 ? true : false })
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
        dispatch(setAlert(e.message, 'danger'), { type: SET_ALERT })
        dispatch({ type: LOGUT })
    }
}


export const signup = (body, setLoading) => async dispatch => {
    try {
        await Auth.signUp({ username: body.email, password: body.password });
        dispatch({ type: SIGNUP })
    } catch (e) {
        dispatch({ type: SIGNUP_FAIL, payload: false })
        setLoading(false)
        dispatch(setAlert(e.message, 'danger'), { type: SET_ALERT })
    }
}

export const load = () => async dispatch => {
    try {
        await Auth.currentSession();
        const user = await Auth.currentAuthenticatedUser();
        const groups = user.signInUserSession.accessToken.payload["cognito:groups"]
        dispatch({ type: LOGIN, payload: groups.length !== 0 ? true : false })
        dispatch({ type: LOAD })
    } catch (e) {
        dispatch({ type: LOAD_FAIL })
    }
}
let nextToken;
export const getUsers = (limit) => async dispatch => {
    try {
        let apiName = 'AdminQueries';
        let path = '/listUsers';
        let myInit = {
            queryStringParameters: {
                "token": nextToken,
                UserPoolId: config.cognito.USER_POOL_ID
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        const res = await API.get(apiName, path, myInit);
        //nextToken = NextToken;
        console.log(res);
        //dispatch({ type: GET_USERS, payload: rest })

    } catch (e) {
        console.error(e)
        dispatch({ type: GET_USERS_FAIL })
    }
}